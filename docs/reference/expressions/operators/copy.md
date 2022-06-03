---
sidebar_position: 0.5
---

# Copy

### `{ with }`

It is possible to copy a [record](/docs/language-basics/composite#record) value and change only a subset of its fields values with the `{ r with u }` operator, where `r` is a record and `u` is a list of field assignment.

For example, consider the following [record declaration](/docs/reference/declarations/compositetypes#record):
```archetype
record voter {
  weight   : nat;
  voted    : bool;
  delegate : option<address>;
  vote     : nat;
}
```

The following creates a copy of `voter` record value:
```archetype
const v = {
  weight   = 1;
  voted    = false;
  delegate = none;
  vote     = 0;
 };
const c = { v with
  delegate = some(caller);
  vote     = 1;
};
/* c is { 1; false; some(caller); 1 } */
```

:::info
This operator is useful to create a *new* record from an existing one. In order to update an existing record, the [field assignment](/docs/reference/instructions/assignement#record) operator is to be preferred.
:::