Creates an operation for contract creation. This operations is then added to the `operations` builtin list of generated operations.

For example, in order to create contract from source `./tests/simple.tz` for `0` as natural initial storage:

```archetype
const storage_init : nat = 0;
const op_addr : (operation * address) =
  create_contract("./tests/simple.tz", none, 0tz, storage_init);
operations := [op_addr[0]]
```

It is also possible to [import](/docs/reference/declarations/external-contract) the contract with:

```archetype
import simple from "./tests/simple.tz"
```

and deploy it with:
```archetype
const storage_init : nat = 0;
const op_addr : (operation * address) =
  create_contract(simple, none, 0tz, storage_init);
operations := [op_addr[0]]
```

:::info
The import of archetype contract (from `.arl` file) will be available in next releases.
:::

