---
sidebar_position: 0
---

# Sequence

The [effect](/docs/reference/declarations#effect) of an [entrypoint](/docs/reference/declarations#entrypoints) is composed of zero, one or several instructions presented below.

The literal for zero instruction is `()`; several instructions are separated with `;`.

For example, `exec` entry point does nothing:
```archetype
entry exec() {
  ()
}
```

Entry `exec` below executes instructions *instr1* and *instr2*; note there is no `;` after *instr2*:
```archetype
entry exec() {
  instr1;
  instr2   /* no ';' after last instruction */
}
```
In conditional branches of instructions like `if then`, it is necessary to delimit a sequence of instructions with `begin ... end`.

For example, *instr2* below is *always* executed because it does not belong to the conditional branch of the `if` instruction:
```archetype
entry exec() {
  if expr0 then   /* first instruction  */
    instr1;
    instr2        /* second instruction */
}
```
In order to execute *instr1* and *intr2* when epxression *expr0* is `true`, use `begin ... end`:
```archetype
entry exec() {
  if expr0 then begin
    instr1;
    instr2
  end
}
```
