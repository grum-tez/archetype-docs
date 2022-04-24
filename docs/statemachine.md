---
sidebar_position: 5
---

# State Machine

A [state machine](https://en.wikipedia.org/wiki/Finite-state_machine) defines a global *state* and *transitions* from one state to another.

Archetype provides the possibility to design the contract as a state machine; it simplifies the management of the contract's state compared to a manual management with [`bool`](/docs/reference/types#bool) or [`nat`](/docs/reference/types#nat) variables, because the only way to change the contract state is through transition entrypoints, which puts the contract's state under *explicit* control.

## States

The `states` keyword is used to declare the contract's states.

For example:
```archetype
states =
| Pending initial
| Shipped
| Accepted
| Rejected
| Canceled
```

The Michelson representation of the contract state is a storage variable named `_state` and typed [`nat`](/docs/reference/types#nat).

See the [`states`](/docs/reference/declarations#states) article for more information.

## Transitions

A transition is an entrypoint that changes the contract states. It provides a dedicated syntax to define guard conditions and transition effect.

For example, the following entrypoint
```archetype
transition accept() {
  called by buyer
  from Shipped
  to   Accepted
  with effect {
    transfer balance to seller
  }
}
```

See the [`transition`](/docs/reference/declarations#transition) article for more information.

## Check state

### Section
The [`state is`](/docs/reference/declarations#state-is) section allows to allow the exection of an entrypoint only when the contract is in the specified state.

For example, the following entrypoint does not fail when the current contract state is `Accepted`, and fails otherwise:
```archetype
entry pay() {
  state is Accepted
  /* ... other sections ... */
}
```

See the [Sections](/docs/reference/declarations#sections) article for more information on sections.


### `state` constant

It is possible to interrogate the contract state anywhere in any entrypoint effect with the [`state`](/docs/reference/expressions/constants#state) constant. It is not possible to assign a value with an [assignment](/docs/reference/instructions#assignment) instruction. Use a [transition](/docs/statemachine#transitions) to change contract's state.

The constant may be interrogated with an `if` or a `match with` instruction.

For example:
```archetype
if state = Canceled then /* ... */
```

or:
```archetype
match state with
| Pending  -> /* do something in Pending  state */
| Shipped  -> /* do something in Shipped  state */
| Accepted -> /* do something in Accepted state */
| Rejected -> /* do something in Rejected state */
| Canceled -> /* do something in Canceled state */
end;
```
