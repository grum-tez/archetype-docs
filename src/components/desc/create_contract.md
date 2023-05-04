Creates an operation for contract origination. The returned operation is then to be added to the `operations` builtin list of generated operations.

For example, in order to deploy a contract from Michelson source `simple.tz` with natural `0` as initial storage:

```archetype
archetype anothercontract

import simple from "simple.tz"

entry exec() {
  const initial_storage : nat = 0;
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, initial_storage);
  operations := [op_addr[0]]
}
```

It is also possible to create a contract from an Archetype source.

Instead of passing the initial storage, a record of contract [parameters](/docs/reference/declarations/contract#parameters) is passed.

Say for example that the deployed contract declares a [variable parameter](/docs/reference/declarations/contract#variable) named `owner` typed `address`:

```archetype
archetype anothercontract

import "simple.arl"

entry exec() {
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, { owner = caller });
  operations := [op_addr[0]]
}
```

When the contract declares a [constant parameter](/docs/reference/declarations/contract#constant), then only a literal value can be passed. Say for example that the created contract has a constant parameter named `total_amount` typed `nat`:

```archetype
archetype anothercontract

import "simple.arl"

entry exec() {
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, { total_amount = 1_000_000 });
  operations := [op_addr[0]]
}
```




