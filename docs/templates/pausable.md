---
sidebar_position: 6
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Pausable

This template is used in many contracts whenever there needs to be able to pause entrypoints. It requires the `Ownership` template.

<TemplateInfo data={templates.pausable.info} />

## Code

:::info
It is required to *copy* this code in the created contract to benefit from the pausable pattern.
:::

```archetype
/*  PAUSABLE ----------------------------------------------------------------- */

variable paused : bool = false

function is_not_paused() : bool {
  do_fail_if(paused, "CONTRACT_PAUSED");
  return true
}

entry pause() {
  called by owner
  require {
    pausable_r1: is_not_paused()
  }
  effect {
    paused := true
  }
}

entry unpause() {
  called by owner
  require {
    pausable_r2: paused otherwise "CONTRACT_NOT_PAUSED"
  }
  effect {
    paused := false
  }
}
```
[`variable`](/docs/reference/declarations/storage#variable) [`bool`](/docs/reference/types#bool)
[`entry`](/docs/reference/declarations/entrypoint#entry) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`:=`](/docs/reference/instructions/assignment#a--b)
[`function`](/docs/reference/declarations/function) [`do_fail_if`](/docs/reference/instructions/divergent#do_fail_ift--bool-e--t)

## Storage

### `paused`

<Constant data={templates.pausable.paused} />

## Functions

### `is_not_paused()`

<Builtin data={templates.pausable.is_not_paused} />

## Entrypoints

### `pause()`

<Builtin data={templates.pausable.pause} />

### `unpause()`

<Builtin data={templates.pausable.unpause} />





