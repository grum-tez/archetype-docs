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

## `detach as`

It is possible to *detach* a value of type [`option`](/docs/reference/types#option<T>), [`map`](/docs/reference/types#map<K,%20V>) or [`big_map`](/docs/reference/types#big_map<K,%20V>), and create a fresh local variable with it. The storage value is *mutated* the following way:
* an `option` value is set to `none`
* the entry is removed from the `map` or `big_map` value

It fails if the option is already `none` or if the map entry does not exist.

For example on an `option` value:
```archetype
variable os : option<string> = some("Hello detach!")
variable res : string = ""

entry exec() {
  detach os as v : "ALREADY_NONE";
  /* os is now 'none' and v equals "Hello detach!" */
  res := v
  /* res is now "Hello detach!" */
}
```

For example on a `map` value:

```archetype
variable ms : map<nat, string> = [(0, "Hello detach!")]
variable res : string = ""

entry exec() {
  detach ms[0] as v : "KEY_DOES_NOT_EXIST";
  /* ms[0] is now 'none' and v equals "Hello detach!" */
  res := v
  /* res is now "Hello detach!" */
}
```

:::info
Note that it is the **only** way to get a [ticket](/docs/reference/types#ticket<T>) from a storage or local container (option, map). For example:

```archetype
variable my_ticket : option<ticket<nat * option<bytes>>> = none

entry transfer_ticket(fa2_1: address, to_ : address) {
  detach my_ticket as t : "NO_TICKET";
  transfer 0tz to fa2_1 call import_ticket<list<import_ticket_param>>([{
    itp_to      = to_ ;
    itp_tickets = t
  }]);
}
```
:::

:::warning
In current version, the detached value is limited to value of form:
* `id`
* `id[expr]`

where `id` is a simple identifier, and `expr` is an expression.
:::
