Creates an operation for contract creation. This operations is then added to the `operations` builtin list of generated operations.

For example, in order to create contract from source `./tests/simple.tz` for `0` as natural initial storage:

```archetype
const storage_init : nat = 0;
const op_addr : (operation * address) =
  create_contract("./tests/simple.tz", none, 0tz, storage_init);
operations := [op_addr[0]]
```