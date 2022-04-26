---
sidebar_position: 2.5
toc_max_heading_level: 2
---

# Instructions

import Builtin from '@site/src/components/Builtin.js';
import { assetinstructions } from './assetinstructions.js';
import Operator from '@site/src/components/Operator.js';
import { assignments } from './assignments.js';


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

Assigns `a and b` to variable `a` (see [`and`](/docs/reference/expressions/operators#a-and-b) operator)

### `a |= b`

Assigns `a or b` to variable `b` (see [`or`](/docs/reference/expressions/operators#a-or-b) operator)


## Control

### `if`
if then

if then else

### `match with`

match with end

### `for`

### `while`

### `iter`

## Divergent

fail

dorequire

dofailif

## Containers

### Set
add

remove

### List
prepend

reverse

concat

### Map
put

remove

update

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