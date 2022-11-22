---
sidebar_position: 8
---

# External contract

It is possible to import external contract compiled in Michelson. For example:

```archetype
import simple from "simple.tz"
```

:::warning
The path is relative to the directory where archetype compiler is executed (ie. called, not installed).
:::

Importing a contract makes it easy to *call* or *deploy*, since the contract's signature is then known from archetype compiler.

## Call entrypoint

Consider the following Michelson contract that provides one entrypoint that takes a [`nat`](/docs/reference/types#nat) parameter:

```archetype title="simple.tz"
{
  storage nat;
  parameter (nat %exec);
  code { UNPAIR;
         SWAP;
         DROP;
         NIL operation;
         PAIR };
}
```

Say this contract is deployed at address `KT1...`.

It is then possible to call simple's *default* entrypoint with:

```archetype
const addr = KT1...;
transfer 0tz to entry simple(addr).exec(4)
```

## Call view

Say *simple* has a view called `getN`:

```archetype title="simple.tz"
{
  storage unit;
  parameter unit;
  code { CDR;
         NIL operation;
         PAIR };
  view "getN" unit nat { DROP; PUSH nat 2 }
}
```

The view is then called with:

```archetype
const res : nat ?= simple(addr).getN(Unit) : "VIEW_ERROR";
```

## Deploy a new instance

It is possible to deploy a new instance of the contract with the [`create_contract`](/docs/reference/expressions/builtins#create_contract(path,%20delegator,%20amount,%20storage)) builtin:

```archetype
const storage_init : nat = 0;
const op_addr : (operation * address) =
  create_contract(simple, none, 0tz, storage_init);
operations := [op_addr[0]]
```
