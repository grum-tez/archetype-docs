---
sidebar_position: 3
---

# Composite types

Archetype provides user-defined [composite types](/docs/language-basics/composite) on top of basic [types](/docs/reference/types).

## Tuple

A [tuple](/docs/language-basics/composite#tuple) is a list of anonymous values of different types. The type is a list of types separated by `*`. A tuple litteral is a list of values separated by `,` and surrounded by parentheis.

For example:
```archetype
const t : string * nat = ("a string", 2)
```

It is represented in Michelson as a right-comb pair of values.

## Record

A [record](/docs/language-basics/composite#record) is a list of named fields of different types. It is declared by the `record` keyword followed by a list of pairs of an [identifier](/docs/reference/declarations/identifier) and a basic [type](/docs/reference/types) or a [composite type](/docs/language-basics/composite). It *cannot* be recursive though.

For example:

```archetype
record voter {
  weight   : nat;             /* weight is accumulated by delegation */
  voted    : bool;            /* if true, that person already voted  */
  delegate : option<address>; /* person delegated to                 */
  vote     : nat;             /* index of the voted proposal         */
}
```

### Default value

It is possible to specify the default value of a record field.

For example, the following declaration specifies that the default values of `voted` and `delegate` fields:
```archetype
record voter {
  weight   : nat;
  voted    : bool = false;
  delegate : option<address> = none;
  vote     : nat;
}
```

The effect is that fields with a default value may not be specified when creating a record value. For example, the following creates a `voter` record without specified values for these fields:
```archetype
var v = { weight = 1; vote = 234523 };
```

### Michelson representation

By default, the Michelson structure of a record is a *right comb* of pairs.

It means for example that the Michelson type of the `voter` record declared above is:
```
pair (nat %weight) (pair (bool %voted) pair ((option %delegate address) (nat %vote)))
```

It is possible to specify another structure and/or other field names, with the `as` keyword, as illustrated below:

```archetype
record voter {
  weight   : nat;
  voted    : bool = false;
  delegate : option<address> = none;
  vote     : nat;
} as (((w, has_voted), (del, vote)))
```

The resulting Michelson type is then:
```
pair (pair (nat %w) (bool %has_voted)) (pair (option %del address) (nat %vote))
```

## Enum

An [enumeration](/docs/language-basics/composite#enum) is a union type of a fixed set of named types. It is declared by the `enum` keyword followed by an [identifier](/docs/reference/declarations/identifier) and the list of names types separated by `|`.

For example:
```archetype
enum juice_size =
| Small
| Medium
| Large
```

Named types may take an argument of any basic [type](/docs/reference/types) or composite type ([tuple](/docs/language-basics/composite#tuple), [record](/docs/language-basics/composite#record), ...) (it *cannot* be recursive though).

For example, the type `RGB` below is the tuple of 3 [`nat`](/docs/reference/types#nat):
```archetype
enum color =
| RGB<nat * nat * nat>
| Hex<bytes>
| Css<string>
```

### Michelson representation

When named types have no argument (like in `juice_size` example above), they are represented by an [`int`](/docs/reference/types#nat) value from `0` to `n-1` if `n` is the number of named types.

With argument (like in `color` example above), named types are represented with imbricated [`or`](/docs/reference/types#or<T1,%20T2>) values. For example the Michelson type of `color` is:
```
or (pair %RGB nat (pair nat nat)) (or (bytes %Hex) (string %Css))
```

## States

When designing the contract as a [state machine](/docs/statemachine), the `states` keyword is used to declare the list of states.

For example:
```archetype
states =
| Pending initial
| Shipped
| Accepted
| Rejected
| Canceled
```

One state may be followed by the `initial` keyword to specify the initial machine's state. If omitted, the first state is the initial state.

The Michelson representation of the contract state is a storage variable named `_state` and typed [`nat`](/docs/reference/types#nat).

## Event

Archetype defines [events](/blog/events) with the `event` keyword declaration. An event may possess several fields, like a record.

For example the following declares the HighestBidIncreased event with two fields bidder and amount:

```archetype
event HighestBidIncreased {
  bidder : address;
  amount : tez
}
```
