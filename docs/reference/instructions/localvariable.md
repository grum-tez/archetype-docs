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

## `?=` (get option, assign or fail)

It is possible to declare a local variable (`const` or `var`) as the `some` value of an [`option`](/docs/reference/types#option<T>) variable, and fail with an error message if this variable is `none`.

For example, the following declares a `const` local variable as the some value of the execution of [`unpack`](/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)) buitlin which returns an option value:

```archetype
const v ?= unpack<nat>(0x0505)
```

By default, it fails with `"OPTION_IS_NONE"`.

It is equivalent to:
```archetype
const v = 0;
match unpack<nat>(0x0505) with
| some(u) -> v := u
| none    -> fail("OPTION_IS_NONE")
end
```

### Explicit error

It is possible to declare an explicit error message after the `:` character. The error message may be any [packable](/docs/language-basics/types#packable) value (not just a [`string`](/docs/reference/types#string)).

For example, suppose `m` is a [`map`](/docs/reference/types#map<K,%20V>) of type `map<T, nat>`:
```archetype
var v ?= m[k] : ("KEY_NOT_FOUND", k)
```

The above declaration fails with pair `("KEY_NOT_FOUND", k)`. It is equivalent to:
```archetype
var v = 0;
match m[k] with
| some(u) -> v := u
| none    -> fail(("KEY_NOT_FOUND", k))
end
```

## `detach`

// TODO

```archetype
archetype ticket_detach_option

variable input : option<ticket<string>> = none<ticket<string>>

variable output : option<ticket<string>> = none<ticket<string>>

entry init() {
  input := create_ticket("info", 1)
}

entry exec() {
  detach t from input : "ERROR";
  output := some(t)
}
```

```archetype
archetype ticket_detach_big_map_record

record my_record {
  v : string;
  t : ticket<string>
}

variable input : big_map<nat, my_record> = []

variable output : option<ticket<string>> = none<ticket<string>>

entry init() {
  const nt ?= create_ticket("info", 1) : "ERROR";
  input.put(0, {v = "mystr"; t = nt});
}

entry exec() {
  detach dt from input[0] : "ERROR";
  output := some(dt.t)
}
```