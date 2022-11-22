---
sidebar_position: 8
---

# External contract

It is possible to import external contract compiled in Michelson, to call it or deploy it from a contract.

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

In order to call it, it is possible to import it with the *import* declaration:

```archetype
import simple from "simple.tz"
```

:::info
The path is relative to the directory where archetype compiler is executed (ie. called, not installed).
:::

It is then possible to call the *simple* default entrypoint with:

```archetype
const addr = KT1...;
transfer 0tz to addr call simple.default(4)
```

## Call view

Equivalently a contract view can be called.

```archetype
transfer 0tz to addr call simple.aview(5)
```

## Deploy a new instance

It is possible to deploy a new instance of the contract with the [create_contract](/docs/reference/expressions/builtins#create_contract(path,%20delegator,%20amount,%20storage)) builtin:

```archetype
const storage_init : nat = 0;
const op_addr : (operation * address) =
  create_contract(simple, none, 0tz, storage_init);
operations := [op_addr[0]]
```
