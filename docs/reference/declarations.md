---
sidebar_position: 0
toc_max_heading_level: 3
---

# Declarations

import { Grid } from '@mui/material';
import { keywords } from './keywords.js'
import ThemedDivider from '../../src/components/Divider.js'

## Identifier

The identifier of a contract element ([parameter](/docs/reference/declarations#parameter), [variable](/docs/reference/declarations#variable), [entrypoint](/docs/reference/declarations#entrypoints), ...) is a string that starts with an alphabetic character (lower or upper case) followed by a string of alphanumeric characters (lower or upper case) or underscores. The maximum size of an identifier is 254. That is to say that an identifier verifies the following regular expression:

`([A-Za-z][A-Za-z0-9_]*){1,254}`

### Keywords

A keyword is a reserved identifier that cannot be used as identifier, unless it is prefixed by the `%` character.

For example, [`transfer`](/docs/reference/instructions#transfer) is the builtin instruction to call an external contract; in order to declare an entrypoint named `transfer`, prefix it with `%`:

```archetype
entry %transfer() {
  /* ... */
}
```

Below is the list of the language keywords.

<Grid container spacing={2}>
{ keywords.map((k,i) => {
    return <Grid item key={'kw'+i}><code>{k.id}</code></Grid>
}) }
</Grid>

## Contract

An archetype contract starts with the `archetype` keyword followed by a contract [identifier](/docs/reference/declarations#identifier).

For example:
```archetype
archetype escrow

/* ... */
```

## Storage

### Parameter

A contract parameter is a storage element whose value is set at deployment (origination) time. It is defined by an [identifier](/docs/reference/declarations#identifier) and a [type](/docs/reference/types). The list of parameters follows the contract's identifier between parenthesis and separated by comma.

For example:
```archetype
archetype escrow(seller : address, buyer : address)

/* ... */
```

The `seller` and `buyer` [addresses](/docs/reference/types#address) then need to be set at deployment time with the completium CLI's `deploy` command; for example:
```bash
completium-cli deploy escrow.arl --parameters '{ "seller" : "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb", "buyer" : "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6" }'
```

The value of a contract parameter may be modified by [assignement](/docs/reference/instructions#assignment) instructions in [entrypoints](/docs/reference/declarations#entrypoints).

### Variable

A contract variable is a storage element whose value is set at declaration time. It is declared with the `variable` keyword followed by an [identifier](/docs/reference/declarations#identifier), a [type](/docs/reference/types) and the initial value.

For example:
```archetype
variable counter : nat = 0
```

```archetype
variable admin_candidate : option<address> = none
```

The value of a storage variable may be modified by [assignement](/docs/reference/instructions#assignment) instructions in [entrypoints](/docs/reference/declarations#entrypoints).

### Asset

An [asset](/docs/asset) collection is declared with the `asset` keyword followed by the asset collection [identifier](/docs/reference/declarations#identifier) and the list of fields (identifier and type).

For example, the following declares the `vehicle` asset:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
}
```

#### Asset key

By default, the first field serves as the asset key. Any comparable field of the asset may be declared as the asset key with the `identified by` modifier; hence the declaration above is equivalent to:
```archetype
asset vehicle identified by vin {
  vin          : string;
  /* ... */
}
```
Several fields may be declared to form the asset key; for example the `liquidity` asset is identified by two fields:
```archetype
asset liquidity identified by token_id owner {
  token_id : string;
  owner    : address;
  amount   : nat;
}
```

The key is then the [tuple](/docs/reference/types#tuple) of fields' value, which is in Michelson the right comb of pairs of values; for example, the expression to retrieve the amount of token `0` of `tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb` is:
```archetype
var a = liquidity[(0,tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb)].amount;
```

See access operator [`[]`](/docs/reference/expressions/asset#ak--asset_keyaf) for more information.

#### Default value

It is possible to define a default value for an asset field; for example:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date    = now;
  nbdoors      : nat     = 5;
}
```

Fields with default value are not required when adding a new asset in collection; for example, the following instruction adds a new `vehicle` asset with release date equal to `now` and nbdoors equal to `5`:
```archetype
vehicle.add({ vin = "1G1AF1F57A7192174"; manufacturer = "Renault" })
```

See the [`add`](/docs/reference/instructions#aadda) instruction for more information.

#### Big map

The `to big_map` modifier compiles the collection as a [`big_map`](/docs/reference/types#big_map<K,%20V>).

For example:
```archetype
asset vehicle to big_map {
  vin          : string;
  /* ... */
}
```

#### Iterable big map

The `to iterable_big_map` modifier compiles the collection as an [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>).

For example:
```archetype
asset vehicle to iterable_big_map {
  vin          : string;
  /* ... */
}
```

#### Initial collection

It is possible to specify the initial value of the asset collection at origination with the `initialized by` modifier followed by the collection literal: a set of asset definitions.

For example, the following declaration initializes the vehicle asset with 2 assets:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
} initialized by {
  { "1G1AF1F57A7192174"; "Renault"; 2021-06-28; 5 };
  { "JNKCV61E49M014581"; "Peugeot"; 2021-07-12; 3 }
}
```

The initial value of an asset collection is interpreted by the completium CLI's `deploy` command to set the initial storage Michelson value.

#### Michelson representation

The asset collection is compiled to Michelson as a [map](/docs/reference/types#map<K,%20V>) (or [big_map](/docs/reference/types#big_map<K,%20V>)) of records (right comb of pairs of annotated data).

An asset with only one field is compiled to a Michelson [set](/docs/reference/types#set<T>).

For example, the declaration above is quasi equivalent to the following lower-level code:

```archetype
record vehicle_data {
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
}

variable vehicle : map<string, vehicle_data> = [
  ("1G1AF1F57A7192174", { "Renault"; 2021-06-28; 5 });
  ("JNKCV61E49M014581", { "Peugeot"; 2021-07-12; 3 })
]
```

## Composite types

Archetype provides user-defined [composite types](/docs/language-basics/composite) on top of basic [types](/docs/reference/types).
### Record

A [record](/docs/language-basics/composite#record) is a list of named fields of different types. It is declared by the `record` keyword followed by a list of pairs of an [identifier](/docs/reference/declarations#identifier) and a basic [type](/docs/reference/types) or a [composite type](/docs/language-basics/composite). It *cannot* be recursive though.

For example:

```archetype
record voter {
  weight   : nat;             /* weight is accumulated by delegation */
  voted    : bool;            /* if true, that person already voted  */
  delegate : option<address>; /* person delegated to                 */
  vote     : nat;             /* index of the voted proposal         */
}
```

#### Default value

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

#### Michelson representation

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

### Enum

An [enumeration](/docs/language-basics/composite#enum) is a union type of a fixed set of named types. It is declared by the `enum` keyword followed by an [identifier](/docs/reference/declarations#identifier) and the list of names types separated by `|`.

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

#### Michelson representation

When named types have no argument (like in `juice_size` example above), they are represented by an [`int`](/docs/reference/types#nat) value from `0` to `n-1` if `n` is the number of named types.

With argument (like in `color` example above), named types are represented with imbricated [`or`](/docs/reference/types#or<T1,%20T2>) values. For example the Michelson type of `color` is:
```
or (pair %RGB nat (pair nat nat)) (or (bytes %Hex) (string %Css))
```

### States

When designing the contract a [state machine](/docs/statemachine), the `states` keyword is used to declare the list of states.

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

### Event

Archetype defines [events](/docs/language-basics/events) with the `event` keyword declaration. An event may possess several fields, like a record.

For example the following declares the HighestBidIncreased event with two fields bidder and amount:

```archetype
event HighestBidIncreased {
  bidder : address;
  amount : tez
}
```

## Inlined

### Constant

A constant is a globally declared value that cannot be modified by [entrypoints](/docs/reference/declarations#entrypoints). The `constant` keyword is used to declare a constant, followed by the [identifier](/docs/reference/declarations#identifier), a [type](/docs/reference/types) and a value.

It is inlined at compilation time, hence it is *not* an element of the contract's storage.

For example:
```archetype
constant nb_iterations : nat = 20
```

## Entrypoints

The contract code is structured as a set of entrypoints. The execution of an entrypoint may change the contract storage and/or generate blockchain operations (a transfer of tez to a contract or account, or a call to another contract's entrypoint).

### Entry

An entrypoint is declared with the `entry` keyword followed by the entrypoint [identifier](/docs/reference/declarations#identifier) and the list of parameters; a parameter is defined by an [identifier](/docs/reference/declarations#identifier) and a type ([basic](/docs/reference/types) or [composite](/docs/language-basics/composite)).

For example:
```archetype
entry %transfer(%from : address, %to: adress, amount : nat) {
  /* ... body ... */
}
```

The body of an entrypoint is composed of [*sections*](/docs/reference/declarations#sections) presented below.

### Transition

A transition is an entrypoint that changes the [state](/docs/reference/expressions/constants#state) of the contract desgined as a [state machine](/docs/statemachine).

The `transition` keyword declares a transition, followed by the entrypoint [identifier](/docs/reference/declarations#identifier) and the list of parameters.

The body of the transaction is made of the following *sections*:

#### `from`

The `from` section, followed by a state value, specifies the required state of the contract to transition from. It fails with `"InvalidState"` if the transition is called while the contract is in another state.

For example:
```archetype
transition accept() {
  from Shipped
  /* ... */
}
```

#### `to ... when { ... } with effect { ... }`

The `to` section, followed by a state value, specifies the state to transition to. It is optionally followed by:
* `when` and a [boolean](/docs/reference/types#bool) expression to specify a guard condition
* `with effect` to specify an effect (on storage and/or operations)

For example, the following entrypoint transitions from `Shipped` to `Accepted`:
```archetype
transition accept() {
  from Shipped
  to   Accepted
}
```

A transition may have an effect, like for example transfering the [`balance`](/docs/reference/expressions/constants#balance) of the contract to the `seller` [address](/docs/reference/types#address):
```archetype
transition accept() {
  from Shipped
  to   Accepted
  with effect {
    transfer balance to seller
  }
}
```

It is possible to transition to different states according to *guard conditions*; it transitions to the first state whose guard condition is verified.

For example, the following transitions from `Shipped` state to `Accepted` when `success` is `true`, and to `Canceled` otherwise:
```archetype
transition accept(success : bool) {
  from Shipped
  to Accepted when { success } with effect {
    transfer balance to seller
  }
  to Canceled /* when success is false */
}
```

Any [section](/docs/reference/declarations#sections) (except `state is`) may also be added to the body of a transaction.

For example the following transition may only be called by the `transporter` [address](/docs/reference/types#address) and it sets the storage variable `message` value:
```archetype
transition accept(success : bool, msg : string) {
  called by transporter
  from Shipped
  to Accepted when { success } with effect {
    transfer balance to seller
  }
  to Canceled /* when success is false */
  effect {
    message := msg
  }
}
```


### Getter

A *getter* is the entrypoint type dedicated to the [TZIP-4 view](https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-4/tzip-4.md) pattern: it takes an argument, and "*returns*" a value; the return mechanism is implemented in the form of an argument callback whose argument is the returned value, and called by the getter.

The *getter* syntax hides the callback argument and uses the `return` keyword to specify the value to pass to the callback.

For example, the following declares a storage [variable](/docs/reference/declarations#variable) `bar` and the `getBar` getter that returns this value:
```archetype
variable bar : nat = 0

getter getBar() : nat {
  return bar;
}
```
Note that the returned value's [type](/docs/reference/types) (here [`nat`](/docs/reference/types#nat))is specified after the list of arguments (after a semicolon).


This is syntactic sugar for the following equivalent code:
```archetype
variable bar : nat = 0

entry getBar(callback : contract<int>) {
  transfer transferred to entry callback(bar)
}
```
(see [`transfer`](/docs/reference/instructions#transfer) instruction for more information)

The following illustrates how the `getBar` getter would be called:
```archetype
variable foo : int = 0

entry setFoo(v : int) {
  foo := v
}

entry getFoo(getter_addr : address) {
  transfer 0tz to getter_addr call getBar<contract<int>>(self.setFoo)
}
```
The `getFoo` entrypoint calls the `getBar` entry of contract at address `ca`.

:::info
The TZIP-4 standard is officially deprecated as it is replaced by the [`view`](/docs/reference/declarations#views) feature (available since Ithaca protocol).

The benefit of the `view` feature is that it does not require to split the execution flow in two entries (as in `getFoo` and `setFoo` example above). Hence a view is to be preferred whenever the getter's contract storage is not modified.
:::

### Sections

The body of an entrypoint ('entry', 'transition', 'getter') is made of the following *sections*. Each section is optional and appears in the order of presentation below.

<Grid container>
<Grid xs={12} sm={12} md={2.5}>

#### `refuse transfer`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"NoTransfer"` if the value of [`transferred`](/docs/reference/expressions/constants#transferred) is different from `0tz`

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `sourced by`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"InvalidCaller"` if the value of [`source`](/docs/reference/expressions/constants#source) is different from the argument address.

For example, the `set_owner_candidate` entry point fails if not called by `owner` address:
```archetype
entry set_owner_candidate(oc : address) {
  sourced by owner
  /* ... other sections ... */
}
```

See `called by` section below for more information.

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `called by`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"InvalidCaller"` if the value of [`caller`](/docs/reference/expressions/constants#caller) is different from the argument address.

For example, the `set_owner_candidate` entry point fails if not called by `owner` address:
```archetype
entry set_owner_candidate(oc : address) {
  called by owner
  /* ... other sections ... */
}
```

The argument of the section may also be:
* a list of addresses separated by the `or` keyword
* an [asset](/docs/asset) identified by an [`address`](/docs/reference/types#address) typed field
* a [set](/docs/language-basics/container) or [list](/docs/language-basics/container) of addresses

(this also applies to `source by` section above)

For example:
```archetype
entry set_owner_candidate(oc : address) {
  called by owner or admin
  /* ... other sections ... */
}
```

The `vote` entry below fails if [`caller`](/docs/reference/expressions/constants#caller) is not a `voter` (that is if `voter.contains(caller)` evaluates to `false`):
```archetype
asset voter {
  id       : address;
  nb_votes : nat = 0;
}

entry vote(proposal : nat) {
  called by voter
  /* ... other sections ... */
}
```



</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `state is`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"InvalidState"` if the value of [`state`](/docs/reference/expressions/constants#state) is different from the argument state.

For example, the `redeem` entry point below fails if the contract's state is not `Canceled`:

```archetype
entry redeem() {
  state is Canceled
  /* ... other sections ... */
}
```

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `require`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails if at least one of the requirements is **not** true. A requirement is defined by a unique identifier, a [`bool`](/docs/reference/types#bool) typed expression and an optional error value (introduced by the `otherwise` keyword).

For example, the `pay` entry point fails with:
* `(Pair "r1" "InvalidCondition")` when [`transferred`](/docs/reference/expressions/constants#transferred) is not high enough
* `"PAYMENT_PERIOD_IS_OVER"` when [`now`](/docs/reference/expressions/constants#now) is beyond `deadline` date

```archetype
entry pay() {
  require {
    r1: transferred > amount;
    r2: now < deadline otherwise "PAYMENT_PERIOD_IS_OVER"
  }
  /* ... other sections ... */
}
```

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `failif`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails if at least one of the failing conditions **is** true. A failing condition is defined by a unique identifier, a [`bool`](/docs/reference/types#bool) typed expression and an optional message value (introduced by the `with` keyword).

For example, the code below is equivalent to the code in the above section:

```archetype
entry pay() {
  failif {
    f1: transferred <= amount;
    f2: now >= deadline with "PAYMENT_PERIOD_IS_OVER"
  }
  /* ... other sections ... */
}
```

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

#### `effect`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

This section contains the code (a list of [instructions](/docs/reference/instructions)) to modify the contract's storage and to generate [operations](/docs/language-basics/operations).

For example, the entry point below sets the storage variable `owner_candidate`:
```archetype
variable owner_candidate : option<address> = none

entry set_owner_candidate(oc : address) {
  called by owner
  effect {
    owner_candidate := some(oc)
  }
}
```

If the effect section is the only section in entry point body, the `effect` keyword may be omitted and the code put straightforwardly in top brackets; for example the above entry may be written as:

```archetype
entry set_owner_candidate(oc : address) {
  if caller = owner then fail("InvalidCaller");
  owner_candidate := some(oc)
}
```

</Grid>
</Grid>

## Functions

Entrypoints' effect may call [functions](/docs/language-basics/lambda). A function returns a value, may fail, but cannot change the contract storage.

A function is declared with the `function` keyword followed by a unique [identifier](/docs/reference/declarations#identifier), the returned [type](/docs/reference/types) and the function body. The function body cannot include assignement [instructions](/docs/reference/instructions) on storage elements, nor it can invoke the [`transfer`](/docs/reference/instructions#transfer) instruction; it uses the `return` keyword to return a value.

For example, the following function implements the Horner's formula of the exponential function:
```archetype
function exp(x : rational, steps : nat) : rational {
  var r : rational = 1 + x / steps;
  iter i to steps - 1 do
      r := 1 + x * r / (steps - i)
  done;
  return r
}
```

The Michelson representation of a function is a [lambda](/docs/reference/types#lambda) expression put on the stack.

## Views

view



