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

### Big Map

Big map storage elements (either [`big_map`](/docs/reference/types#big_map<K,%20V>), [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>) or [`asset to big_map`](/docs/reference/declarations/storage#big-map)) are an exception to the rule above. For each big map storage element, two functions are generated:
* a function that checks whether a big map has a given key value. It name is `has_` followed by the storage element name and `_value`. Its argument is the key value. It returns a boolean value.
* a function that retrieves the value associated to a key. It name is `get_` followed by the storage element name and `_value`. Its argument is the key value. It returns the value associated to the key, or `undefined` if not found.

For example, consider the following `loan` asset declaration:
```archetype
asset loan identified by id to big_map {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  creation   : date     = now;
}
```

The following two functions are generated:
* `async has_loan_value(key: string): Promise<boolean>`
* `async get_loan_value(key: string): Promise<loan_value | undefined>`

The `loan_value` corresponds to the `asset_value<loan>` archetype type. See [below](/docs/tests/binding#asset) for more information.


## Entry points

An asynchronous call method is generated for each entry point. Its name is the same as the contract's. It takes the same arguments as the contract's, plus a [`Parameters`](/docs/tests/apis/types#parameters) object to set the caller account and optionally the amount of tez sent. It returns a [`CallResult`](/docs/tests/apis/types#callresult) value.

For example, consider the following contract:

```archetype
archetype example(owner : address)

variable s : string = "Hello binding"

entry set(v : string) { s := v }
```

The code below illustrates how to call the `set` entry point:

```ts
import { example } from `./binding/example.ts`

// ... deploy ...

await example.set("Hello Documentation!", { as : alice })
```

## Entry points' parameters

An asynchronous method is generated for each entry point to get the transaction parameter corresponding to the call to the entry point. Its name is made of the prefix `get_`, followed by the entry point name and suffixed by `_param`. It takes the same arguments as the contract's entry point.

The transaction parameter is then used as an argument of [`exec_batch`](/docs/tests/apis/experiment#exec_batchcps-p) for batch execution of several entry points.

With the same example as above, consider the following contract:

```archetype
archetype example(owner : address)

variable s : string = "Hello!"

entry set(v : string) { s := v }
```

The code below illustrates how to call the `set` entry point:

```ts {5,6}
import { example } from `./binding/example.ts`

await example.deploy({ as : alice })

const set_param1 = await example.get_set_param("Hello Documentation!", { as : alice })
const set_param2 = await example.get_set_param("Hello Binding!", { as : alice })
// exec batch
await exec_batch([set_param1, set_param2], { as : alice })

const s = await example.get_s()
assert(s == "Hello Binding!")
```

## Views

An asynchronous method is generated for each contract's view. Its name is prefixed with `view_`, followed by the name of the view. It takes the same arguments as the contract's view, plus a [`Parameters`](/docs/tests/apis/types#parameters) object to set the caller account and optionally the amount of tez sent.

It returns a promise of the view's returned value.

For example, consider the following contract:
```archetype
archetype example(owner : address)

variable s : string = "Hello!"

view get_s() { return s }
```

The code below illustrates how to call the `get_s` view:
```ts
import { example } from `./binding/example.ts`

await example.deploy({ as : alice })

const s = await example.view_get_s()

assert(s == "Hello!")
```

## Errors

The [`expect_to_fail`](/docs/tests/apis/experiment#expect_to_failf-e) function is used to check that a call to a contract entry point fails as expected. Its second parameter is an error of [`Micheline`](/docs/tests/apis/types#micheline) type.

Contract errors from [sections](/docs/reference/declarations/entrypoint#sections) or issued by [divergent instructions](/docs/reference/instructions/divergent), are generated in the binding object as the `errors` field.

For example, consider the following contract:
```archetype
archetype example

variable s : string = "Hello!"

entry set(v : string) {
  require {
    r0 : length(v) < 10
  }
  effect { s := v }
}
```

The code below illustrates how to setup a test that is expected to fail with `r0` requirement:
```ts
import { example } from `./binding/example.ts`
import { expect_to_fail, get_account } from '@completium/experiment-ts'

const alice = get_account('alice')

await example.deploy({ as : alice })

async expect_to_fail(async () => {
  await example.set("This is a too long message", { as : alice })
}, example.errors.r0)
```

## Type bindings

This section presents how Archetype/Michelson types ar bound to Typescript types.

<TypeMap data={bindings} />

### Tuple

An Archetype [tuple](/docs/language-basics/composite#tuple) (or a Michelson pair) is mapped to a Typescript tuple.

For example, consider the following tuple value in Archetype:
```archetype
const t : (nat * string) = (0, "a string");
```

The `t` value is then mapped to the following TS value:
```ts
const t : [ Nat, string ] = [ 0, new Nat("a string") ]
```

### Map

An Archetype (Michleson) map is translated in Typescript as an *array of pairs*. It cannot be straightforwaldy associated to a Typescript `Map` as the `Map`'s key type is limited to native type with natural order (such as `string` or `number`).

For example, consider the following Archetype map:
```archetype
variable ledger : map<address, int> = []
```

It is translated to Typescript as:
```ts
const ledger : Array<[ Address, Int ]> = []
```

The following code is to retrieve the value in third position:
```ts
const v = ledger[2][1]
```

:::info
The lookup function to retrieve a value from a key is not provided.
:::

### Record

A class is generated for each [`record`](/docs/language-basics/composite#record) declaration found in the Archetype contract. Its name is the same as the declaration's. A public class member is created for each record field, with the same name and a type mapped from the table above. The class constructor has one argument per record field, in the order of record declaration.

For example, consider the following record declaration:
```archetype
record person {
  first : string;
  last  : string;
  age : nat;
}
```

Then a new person class is constructed with the code below:
```ts
const albert = new person("Albert", "Michelson", new Nat(170))
```

Fields may then be accessed like:
```ts
console.log(`Hello ${albert.first} ${albert.last}`) // "Hello Albert Michelson"
```

### Asset

An [asset](/docs/asset) collection is translated to an *array of pairs* of the [asset key](/docs/reference/types#asset_key<A>) and the [asset value](/docs/reference/types#asset_value<A>). The asset value is translated to a class, in the same way as a [record](/docs/tests/binding#record). Its name is the name of the asset suffixed by `_value`.

For example, consider the following asset:
```archetype
asset loan identified by id {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  creation   : date     = now;
}
```

The typescript type for the asset collection is:
```ts
Array<[ string, loan_value ]>
```

The constructor of `loan_value` takes the same fields as the `loan` asset value. The code below illustrates how to create an instance of `loan_value`:

```ts
const lv = new loan_value(
  alice.get_address(),
  new Tez(10),
  new Rational("3.14"),
  new Date()
)
```

:::info
The lookup function to retrieve an asset value from a key is not provided.
:::

### Enum

A class is generated for each [`enum`](/docs/language-basics/composite#enum) declaration. Its name is the same as the declaration's. This class inherits from the abstract [`Enum`](/docs/tests/apis/types#enum) class. A class extend the enum class is generated for each enum's named label. The named label class's constructor has the same arguments as the declaration's.

For example, consider the following enum declaration:
```archetype
enum float =
| Pos<nat * nat>
| Neg<nat * nat>
| Zero
```

Then the following classes are generated:
* `float` class that extends [`Enum`](/docs/tests/apis/types#enum)
* `Pos` class that *extends* `float`
* `Neg` class that *extends* `float`
* `Zero` class that *extends* `float`

It may be used as:
```ts
const p : sign = new Pos(new Nat(3), new Nat(5))
const n : sign = new Neg(new Nat(6), new Nat(3))
const z : sign = new Zero()
```

### Lambda

There is no dedicated type to lambda values. The default lower-level type [`Micheline`](/docs/tests/apis/types#micheline) is then used.

The code below, extracted from the [Multisig](/docs/templates/multisig) contract, illustrates the creation of a lambda as a JSON Micheline value:
```ts
const getCode = (
  dest: Address,
  entrypoint: string,
  typ: string,
  value: string): Micheline => {
  const input = `{
      DROP;
      NIL operation;
      PUSH address "${dest.toString()}";
      CONTRACT %${entrypoint} ${typ};
      IF_NONE
        { PUSH string "EntryNotFound";
          FAILWITH }
        {  };
      PUSH mutez 0;
      PUSH ${typ} ${value};
      TRANSFER_TOKENS;
      CONS;
    }`;
  return expr_micheline_to_json(input)
}
```

The [`expr_micheline_to_json`](/docs/tests/apis/experiment#expr_micheline_to_jsoni) function is used to convert a string to a Micheline value.