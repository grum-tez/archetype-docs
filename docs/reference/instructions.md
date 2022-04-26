---
sidebar_position: 2.5
toc_max_heading_level: 2
---

# Instructions

import Builtin from '@site/src/components/Builtin.js';
import { assetinstructions } from './assetinstructions.js';
import Operator from '@site/src/components/Operator.js';
import { assignments } from './assignments.js';
import { containerinstructions } from './containerinstructions.js';


An instruction has a side effect on the storage, operations or execution (may fail).

## Sequence

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

## Assignment

### `a := b`

Assigns value of expression `b` to *variable* `a`. Type of `b` must be the same as (or compliant with) the type of `a`.

All [types](/docs/reference/types) are assignable, except [`ticket`](/docs/reference/types#ticket<T>)

### `a += b`

<Operator data={assignments['plusequal']} />

### `a -= b`

<Operator data={assignments['minusequal']} />

### `a *= b`

<Operator data={assignments['timesequal']} />

### `a /= b`

<Operator data={assignments['divequal']} />

### `a &= b`

<Operator data={assignments['andequal']} />

### `a |= b`

<Operator data={assignments['orequal']} />

## Control

### `if`

The conditional branching instruction `if ... then` executes a sequence of instruction depending on a [bool](/docs/reference/types#bool) expression value.

For example, *instr1* is executed if *expr1* is `true`:
```archetype
if expr1 then
  instr1
```

The sequence of instructions to execute when expression *expr1* is `false`, follows the `else` keyword:
```archetype
if expr1 then
  instr1
else
  instr2
```

A [sequence](/docs/reference/instructions#sequence) of instructions is delimited by `begin ... end` and  instructions are separated by `;`:
```archetype
if expr1 then begin
  instr1;
  instr2
end else begin
  instr3;
  instr4
end
```

A dangling `else` is attached to the *last* `if`. For example in the following expression, the `else` branch is attached to `if b = 1 then a := 42` instruction:
```archetype
if a = 1 then
  if b = 1 then
    a := 42
else
  b := 42
```

That is that it is equivalent to:
```archetype
/* 'begin end' is optional here, it is to emphasis the logical structure */
if a = 1 then begin
  if b = 1 then
    a := 42
  else
    b := 42
end
```

Note that there is no need for parenthesis in the bool expression; for example:
```archetype
var max : nat = 0;
if a < b then
  max := b
else
  max := a
```

A conditional [`if`](/docs/reference/expressions/controls#if) *expression* is also available.

### `match with`

match with end

### `for`

### `while`

### `iter`

## Divergent

fail

dorequire

dofailif

## Set
### `S.add(e)`

<Builtin data={containerinstructions['setadd']} />

### `S.remove(e)`

<Builtin data={containerinstructions['setremove']} />

## List

### `L.prepend(e)`

<Builtin data={containerinstructions['prepend']} />

### `L.reverse()`

<Builtin data={containerinstructions['reverse']} />

### `L.concat(l)`

<Builtin data={containerinstructions['concat']} />

## Map

### `M.put(k, v)`

<Builtin data={containerinstructions['put']} />

### `M.remove(k)`

<Builtin data={containerinstructions['mapremove']} />

### `M.update(k : K, o : option<T>)`

<Builtin data={containerinstructions['update']} />

## Assets

### `A.add(a)`

<Builtin data={assetinstructions['add']} />

### `A.update(k, { u })`

<Builtin data={assetinstructions['update']} />

### `A.addupdate(k, { u })`

<Builtin data={assetinstructions['addupdate']} />

### `A.remove(k)`

<Builtin data={assetinstructions['remove']} />

### `A.removeif(p)`

<Builtin data={assetinstructions['removeif']} />

### `A.clear()`

<Builtin data={assetinstructions['clear']} />

### `A.removeclear()`

<Builtin data={assetinstructions['removeclear']} />

## Operations

### `transfer`

emit