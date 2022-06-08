---
sidebar_position: 1
---

# Local variable

Instructions presented below declare a *local* variable in entrypoints' [effect](/docs/reference/declarations/entrypoint#effect) section.
## `var`

A local variable is declared by the `var` keyword followed by the variable [identifier](docs/reference/declarations/identifier) and the initial value.

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

Similar to `var` except that a `const` local variable *cannot* be modified by an [assignment](/docs/reference/instructions/assignment) instruction.

For example, the following instructions generates a compilation error:
```archetype
const amount = 10tz;
amount += 1tz        /* compilation error */
```

## `?= :`

It is possible to declare a local variable as the `some` value of an [`option`](/docs/reference/types#option<T>) variable, and fail with an error message if this variable is `none`.

For example, declare a `const` local variable as the some value of the execution of [`unpack`](/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)) buitlin which returns an option value:

```archetype
const v ?= unpack<nat>(0x0505) : "UNPACK_FAILED"
```

It is equally possible to declare a `var` local variable. The error message may be any [packable](/docs/language-basics/types#packable) value (not just a [`string`](/docs/reference/types#string)).

For example:
```archetype
var v ?= m.get(k) : ("KEY_NOT_FOUND", k)
```

The above declaration fails with pair `("KEY_NOT_FOUND", k)` if [`get`](/docs/reference/expressions/builtins#get(m%20:%20map<K,%20T>,%20k%20:%20K)) returns `none`. It is equivalent to:
```archetype
const v = 0;
match m.get(k) with
| some(u) -> v := u
| none    -> fail(("KEY_NOT_FOUND", k))
end
```