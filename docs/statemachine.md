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

See the [states](/docs/reference/declarations/compositetypes#states) article for more information.

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

See the [transition](/docs/reference/declarations/entrypoint#transition) article for more information.

## Check state

### Section
The [`state is`](/docs/reference/declarations/entrypoint#state-is) section allows the execution of an entrypoint (ie does not fail) only when the contract is in the specified state.

For example, the following entrypoint fails if the current contract state is *not* `Accepted`:
```archetype
entry pay() {
  state is Accepted
  /* ... other sections ... */
}
```

See the [Sections](/docs/reference/declarations/entrypoint#sections) article for more information on sections.


### `state` constant

It is possible to interrogate the contract state anywhere in any entrypoint effect with the [`state`](/docs/reference/expressions/constants#state) constant. It is not possible to assign a value with an [assignment](/docs/reference/instructions/assignment) instruction. Use a [transition](/docs/statemachine#transitions) to change contract's state.

The constant may be interrogated with an [`if`](/docs/reference/instructions/control#if) or a [`match with`](/docs/reference/instructions/control#match-with) instruction.

For example:
```archetype
if state = Canceled then /* ... */
```

or:
```archetype
match state with
| Pending  -> instr1 /* when in Pending  state */
| Shipped  -> instr2 /* when in Shipped  state */
| Accepted -> instr3 /* when in Accepted state */
| Rejected -> instr4 /* when in Rejected state */
| Canceled -> instr5 /* when in Canceled state */
end;
```
