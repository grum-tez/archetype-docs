---
sidebar_position: 8
---

# External contract

It is possible to import external Archetype contracts (`.arl` extension), or contracts compiled in Michelson (`.tz` extension).

Importing an Archetype contract gives access to the following elements in the current contract:
* named composite types ([enum](/docs/reference/declarations/compositetypes#enum), [record](/docs/reference/declarations/compositetypes#record), [event](/docs/reference/declarations/compositetypes#event) and [asset](/docs/reference/instructions/asset))
* [entrypoints](/docs/reference/declarations/entrypoint)' signatures
* [views](/docs/reference/declarations/view)' signatures
* [constants](/docs/reference/declarations/inlined#constant) declarations

When importing a Michelson contract, only entrpoint's signatures are available.

## Composite types

In order to use a type declared in a contract, the contract is imported and the type name is prefixed by the imported contract name followed by `::`.

For example, consider the following record declaration in `somecontract.arl`:

```archetype title="somecontract.arl"
archetype somecontract

record person {
  name : string;
  age : nat;
}
```

The `person` record may be used in `anothercontract.arl` by importing `somecontract`:

```archetype title="anothercontract.arl" {7}
archetype anothercontract

import "somecontract.arl"

variable max_age : nat = 0

entry register(p : somecontract::person) {
  max_age := max(max_age, p.age)
}
```

Note that in order to use a type declared in `somecontract`, it is prefixed by `somecontract::`.

:::info
The path is relative to the current importing contract.
:::

:::warning
In the `somecontract` contract, the file name and the archetype identifier (id after `archetype`) must be the same!
:::

## Entrypoint

External contract's [entrypoints](/docs/reference/declarations/entrypoint) can be used without specifying their signature, as it is required by the [transfer](/docs/reference/instructions/operation#transfer) instruction when only the contract address available.

The imported contract handler is passed the contract address, followed by the entrypoint name as illustrated in the following example. Consider the `register` entry declaration in `somecontract.arl`:

```archetype title="somecontract.arl"
archetype somecontract

asset person {
  name : string;
  age : nat;
}

entry register(n : string, a : nat) {
  person.add({ n; a })
}
```

The `register` entrypoint may be called in `anothercontract.arl` by importing `somecontract`:

```archetype title="anothercontract.arl" {9}
archetype anothercontract(person_storage : address)

import "somecontract.arl"

variable max_age : nat = 0

entry declare(n : string, a : nat) {
  max_age := max(max_age, a);
  transfer 0tz to entry somecontract(person_storage).register((n, a))
}
```

## View

External contract's views can be used without specifying their signature. The imported contract handler is passed the contract address, followed by the view name as illustrated in the following example.

Consider the `get_age_average` view declaration in `somecontract.arl`:

```archetype title="somecontract.arl"
archetype somecontract

asset person {
  name : string;
  age : nat;
}

view get_age_average() : rational {
  return (person.sum(the.age) / person.count())
}
```

The `get_age_average` viexw may be called in `anothercontract.arl` by importing `somecontract`:

```archetype title="anothercontract.arl" {8}
archetype anothercontract(person_storage : address)

import "somecontract.arl"

variable max_average : rational = 0.0

entry get_info() {
  max_average ?:= somecontract(person_storage).get_age_average(Unit) : "ERROR"
}
```

## Michelson

It is also possible to import a Michelson contract.

Consider the following Michelson contract that provides one entrypoint that takes a [`nat`](/docs/reference/types#nat) parameter:

```archetype title="simple.tz"
{ storage nat ;
  parameter (or (nat %inc) (nat %dec)) ;
  code { UNPAIR ;
         IF_LEFT
           { DUP ;
             DUP 3 ;
             ADD ;
             DIP 1 { SWAP ; DROP 1 } ;
             SWAP ;
             DROP 1 ;
             NIL operation ;
             PAIR }
           { PUSH int 0 ;
             DUP 2 ;
             INT ;
             DUP 4 ;
             SUB ;
             COMPARE ;
             GE ;
             IF { DUP ; INT ; DUP 3 ; SUB ; ABS }
                { PUSH string "NAT_NEG_ASSIGN" ; FAILWITH } ;
             DIP 1 { SWAP ; DROP 1 } ;
             SWAP ;
             DROP 1 ;
             NIL operation ;
             PAIR } } }
```

This contract declares two entrypoints `inc` and `dec` that takes a `nat` value as parameter.

The following contract calls these entrypoints:

```archetype title="anothercontract.arl" {3,6-7}
archetype anothercontract(simple_addr : address)

import simple from "simple.tz"

entry exec () {
  transfer 0tz to entry simple(simple_addr).inc(3);
  transfer 0tz to entry simple(simple_addr).dec(2);
}
```

:::info
Note that the imported contract is *named* (`simple` above) when imported from Michelson format.
:::
