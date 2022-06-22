---
sidebar_position: 5
---

# Control

In addition of being [instructions](/docs/reference/instructions/control), `if` and `match with` also come as conditional expressions.

### `if then else`

Expression `if e then a else b` evaluates to the evaluation of expression `a` if boolean expression `e` evaluates to `true`, and to the evaluation of `b` otherwise.

`a` and `b` must be of same type.

For example:
```archetype
const r = if now > deadline then 10% else 2%
```

### `match with`

Expression `match with` deconstructs a value of *enumerated* type to extract data from it.

Like [`match with`](/docs/reference/instructions/control#match-with) instruction, enumerated types are [`option`](/docs/reference/types#option<T>), [`or`](/docs/reference/types#or<T1,%20T2>), [`list`](/docs/reference/types#list<T>), [`states`](/docs/reference/declarations/compositetypes#states) and composite type [`enum`](/docs/reference/types#enum).

For example on a [`option`](/docs/reference/types#option<T>) value `prize` of type `option<tez>`:
```archetype
const fee =
  match prize with
  | some(v) -> 20% * v
  | none    -> 5tz
  end
```

See the [instruction](/docs/reference/instructions/control#match-with) equivalent for examples of desconstruction on the other enumerated types.

As for `if` expression above, expressions for each enumerated value must be of same type.

### `a ? b : c`

#### Bool

When `a` is of type [`bool`](/docs/reference/types#bool), expression `a ? b : c` is a synonym of `if a then b else c`.

For example:
```archetype
const ratio = balance > threshold ? 5% : 10%
```

#### Option

When `a` is of type [`option`](/docs/reference/types#option<T>), expression `a ? b : c` is another syntax to fold the optional value `a`, where:
* `b` is the expression to evaluate in case `a` is `some` value
* `c` is the expression to evaluate in case `a` is `none`

The `the` keyword is used in `b` to refer to the argument of the `some` value.

For example, if `prize` is of type `option<tez>`:
```archetype
const reward = prize ? 20% * the : 5tz
```

It is equivalent to:
```archetype
const reward =
  match prize with
  | some(v) -> 20% * v
  | none    -> 5tz
  end
```
