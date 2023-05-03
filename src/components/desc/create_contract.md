Creates an operation for contract creation. The returned operation is then to be added to the `operations` builtin list of generated operations.

For example, in order to deploy a contract from source `simple.tz` for `0` as natural initial storage:

```archetype
archetype anothercontract

import simple from "simple.tz"

entry exec() {
  const storage_init : nat = 0;
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, storage_init);
  operations := [op_addr[0]]
}
```

It is also possible to create a contract from an archetype source.

Instead of passing the initial storage, a record of contract [parameters](/docs/reference/declarations/contract#parameters) is passed.

Say for example that the deployed contract has a [variable parameter](/docs/reference/declarations/contract#variable) named `owner` typed `address`:

```archetype
archetype anothercontract

import "simple.arl"

entry exec() {
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, { owner = caller });
  operations := [op_addr[0]]
}
```

When the contract declared a [constant parameter](/docs/reference/declarations/contract#constant), then only a literal value can be passed. Say for example that the created contract has a constant parameter named `total_amount` typed `nat`:

```archetype
archetype anothercontract

import "simple.arl"

entry exec() {
  const op_addr : (operation * address) =
    create_contract(simple, none, 0tz, { total_amount = 1_000_000 });
  operations := [op_addr[0]]
}
```




