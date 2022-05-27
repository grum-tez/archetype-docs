---
sidebar_position: 4
---

# Inlined

## Constant

A constant is a globally declared value that cannot be modified by [entrypoints](/docs/reference/declarations/entrypoint). The `constant` keyword is used to declare a constant, followed by the [identifier](/docs/reference/declarations/storage#identifier), a [type](/docs/reference/types) and a value.

It is inlined at compilation time, hence it is *not* an element of the contract's storage.

For example:
```archetype
constant nb_iterations : nat = 20
```
