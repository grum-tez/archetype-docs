---
sidebar_position: 1
---

# Local variable

Instructions presented below declare a *local* variable in entrypoints' [effect](/docs/reference/declarations#effect) section.
## `var`

A local variable is declared by the `var` keyword followed by the variable [identifier](docs/reference/declarations#identifier) and the initial value.

For example, the following declares a variable `counter` with initial value `0`:
```archetype
var counter = 0
```

It is possible to specify the variable type:
```archetype
var counter : nat = 0
```

Specifying the type is ususally optional as the typer may *infer* the type of the initial value. It is mandatory though for some types like [`or`](/docs/reference/types#or<T1,%20T2>), or some literals like [`none`](/docs/reference/types#option<T>) or [`[]`](/docs/reference/types#list<T>).

## `const`

Similar to `var` except that a `const` local variable *cannot* be modified by an [assignment](/docs/reference/instructions#assignment) instruction.

For example, the following instructions generates a compilation error:
```archetype
const amount = 10tz;
amount += 1tz        /* compilation error */
```