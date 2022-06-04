---
sidebar_position: 5
---
import { Grid } from '@mui/material';
import ThemedDivider from '@site/src/components/Divider.js'

# Entrypoint

The contract code is structured as a set of entrypoints. The execution of an entrypoint may change the contract storage and/or generate blockchain operations (a transfer of tez to a contract or account, or a call to another contract's entrypoint).

## Entry

An entrypoint is declared with the `entry` keyword followed by the entrypoint [identifier](/docs/reference/declarations/identifier) and the list of parameters; a parameter is defined by an [identifier](/docs/reference/declarations/identifier) and a type ([basic](/docs/reference/types) or [composite](/docs/language-basics/composite)).

For example:
```archetype
entry %transfer(%from : address, %to: adress, amount : nat) {
  /* ... body ... */
}
```

The body of an entrypoint is composed of [*sections*](/docs/reference/declarations/entrypoint#sections) presented below.

## Transition

A transition is an entrypoint that changes the [state](/docs/reference/expressions/constants#state) of the contract desgined as a [state machine](/docs/statemachine).

The `transition` keyword declares a transition, followed by the entrypoint [identifier](/docs/reference/declarations/identifier) and the list of parameters.

The body of the transaction is made of the following *sections*:

### `from`

The `from` section, followed by a state value, specifies the required state of the contract to transition from. It fails with `"InvalidState"` if the transition is called while the contract is in another state.

For example:
```archetype
transition accept() {
  from Shipped
  /* ... */
}
```

### `to`

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

Any [section](/docs/reference/declarations/entrypoint#sections) (except `state is`) may also be added to the body of a transaction.

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


## Getter

A *getter* is the entrypoint type dedicated to the [TZIP-4 view](https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-4/tzip-4.md) pattern: it takes an argument, and "*returns*" a value; the return mechanism is implemented in the form of an argument callback whose argument is the returned value, and called by the getter.

The *getter* syntax hides the callback argument and uses the `return` keyword to specify the value to pass to the callback.

For example, the following declares a storage [variable](/docs/reference/declarations/storage#variable) `bar` and the `getBar` getter that returns this value:
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
(see [`transfer`](/docs/reference/instructions/operation#transfer) instruction for more information)

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
The TZIP-4 standard is officially deprecated as it is replaced by the [`view`](/docs/reference/declarations/view) feature (available since Ithaca protocol).

The benefit of the `view` feature is that it does not require to split the execution flow in two entries (as in `getFoo` and `setFoo` example above). Hence a view is to be preferred whenever the getter's contract storage is not modified.
:::

## Sections

The body of an entrypoint ('entry', 'transition', 'getter') is made of the following *sections*. Each section is optional and appears in the order of presentation below.

<Grid container>
<Grid xs={12} sm={12} md={2.5}>

### `no transfer`

</Grid>

<Grid xs={12} sm={12} md={9.5}>

Fails with `"NO_TRANSFER"` if the value of [`transferred`](/docs/reference/expressions/constants#transferred) is different from `0tz`

A specific error message can be specified with the `otherwise` keyword:

```archetype
entry exec() {
  no transfer otherwise "EXPECTS_FUNDS"
  /* ... */
}
```

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

### `sourced by`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"INVALID_SOURCE"` if the value of [`source`](/docs/reference/expressions/constants#source) is different from the argument address.

For example, the `set_owner_candidate` entry point fails if not called by `owner` address:
```archetype
entry set_owner_candidate(oc : address) {
  sourced by owner
  /* ... other sections ... */
}
```

See `called by` section below for more information.

A specific error message can be specified with the `otherwise` keyword.

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

### `called by`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"INVALID_CALLER"` if the value of [`caller`](/docs/reference/expressions/constants#caller) is different from the argument address.

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
  called by owner or admin otherwise "EXPECTS_OWNER_OR_ADMIN"
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

### `state is`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails with `"INVALID_STATE"` if the value of [`state`](/docs/reference/expressions/constants#state) is different from the argument state.

For example, the `redeem` entry point below fails if the contract's state is not `Canceled`:

```archetype
entry redeem() {
  state is Canceled
  /* ... other sections ... */
}
```

A specific error message can be specified with the `otherwise` keyword.

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>
<Grid xs={12} sm={12} md={2.5}>

### `require`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails if at least one of the requirements is **not** true. A requirement is defined by a unique identifier, a [`bool`](/docs/reference/types#bool) typed expression and an optional error value (introduced by the `otherwise` keyword).

For example, the `pay` entry point fails with:
* `(Pair "r1" "INVALID_CONDITION")` when [`transferred`](/docs/reference/expressions/constants#transferred) is not high enough
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

### `fail if`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

Fails if at least one of the failing conditions **is** true. A failing condition is defined by a unique identifier, a [`bool`](/docs/reference/types#bool) typed expression and an optional message value (introduced by the `with` keyword).

For example, the code below is equivalent to the code in the above section:

```archetype
entry pay() {
  fail if {
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

### `effect`

</Grid>
<Grid xs={12} sm={12} md={9.5}>

This section contains the code (a list of [instructions](/docs/reference#instructions)) to modify the contract's storage and to generate [operations](/docs/reference/instructions/operation).

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
