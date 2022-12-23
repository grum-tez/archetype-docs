---
sidebar_position: 4
sidebar_label: Binding
---
import TypeMap from "@site/src/components/TypeMap.js"
import { bindings } from "./bind.js"

# Binding

This section presents the API of the automatically generated [contract binding](/docs/tests/framework#contract-binding).

The Completium CLI command to generate a contract binding from the contract `contract.tz` is:

```sh
completium-cli generate binding-ts contract.tz
```

When using the [`create project`](/docs/tests/writingtests#create-project) command, binding generation is done with the following command (see [here](/docs/tests/writingtests#generate-binding) for more information):

```sh
npm run gen-binding
```

## Deploy

The binding class provides the `deploy` method to create a new instance of the contract on the configured network (see [here](/docs/tests/framework#michelson-execution) for network configuration).

The `deploy` method takes as many arguments as the number of [contract parameters](/docs/reference/declarations/contract#parameters), plus a [`Parameters`](/docs/tests/apis/types#parameters) object to set the originator account and optionally the initial value of contract [balance](/docs/reference/expressions/constants#balance).

For example, consider the following contract :

```archetype
archetype example(owner : address)

variable s : string = "Hello binding"

entry set(v : string) { s := v }
```

The following example illustrates how to deploy it:

```ts
import { example } from `./binding/example.ts`

const alice = get_account('alice')

await example.deploy(alice.get_address(), { as : alice })
// display newly deployed contract:
console.log(await example.get_address())
```

:::info
The method is named `originate` when binding is generated from a Michelson contract.
:::


## Storage getters

A getter method is generated for each storage element. Its name is made of prefix `get_` followed by the storage element name. It does not take any argument, and the method is asynchronous (must be called with `await` keyword).

It returns the storage value. Its type is the type mapped from the Archetype (or Michelson) one as presented in this [table](/docs/tests/binding#simple-types).

For example, consider the following elementary Michelson contract `example.tz` whose storage is made of a string value `s` and a nat value `n`:

```ts
{
  storage (pair (string %s) (nat %n));
  parameter unit;
  code { CDR;
         NIL operation;
         PAIR };
}
```

The generated contract binding class in `example.ts` provides with two getter methods `get_s` and `get_n`. They are used for example as follow:

```ts
import { example } from `./binding/example.ts`

// ... deploy contract

// read storage
const s = await example.get_s() // s is typed string
const n = await example.get_n() // n is typed Nat
```

## Entry points

An asynchronous call method is generated for each entry point. Its name is the same as the contract's. It takes the same arguments as the contract's, plus a [`Parameters`](/docs/tests/apis/types#parameters) object to set the caller account and optionally the amount of tez sent.

For example, consider the following contract:

```archetype
archetype example(owner : address)

variable s : string = "Hello binding"

entry set(v : string) { s := v }
```

The code below illustrates how to call the `set` entry point:

```ts
import { example } from `./binding/example.ts`

// deploy

await example.set("Hello Documentation!", { as : alice })
```

## Views


## Type bindings

This section presents how Archetype/Michelson types ar bound to Typescript types.

<TypeMap data={bindings} />


