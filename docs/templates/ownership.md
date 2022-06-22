---
sidebar_position: 7
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Ownership

This template is used in many contracts whenever there needs a special address to administrate the contract. The ownership of the contract may be transferred.

<TemplateInfo data={templates.ownership.info} />

## Code

:::info
It is required to *copy* this code in the created contract to benefit from the ownership pattern.
:::

```archetype
/* OWNERSHIP TRANSFER ------------------------------------------------------- */

variable owner_candidate : option<address> = none

entry declare_ownership(candidate : address) {
  called by owner
  effect {
    owner_candidate := some(candidate);
  }
}

entry claim_ownership() {
  require {
    ownership_r1: (owner_candidate ? the = caller : false) otherwise "INVALID_CALLER"
  }
  effect {
    owner := caller;
    owner_candidate := none
  }
}
```

[`variable`](/docs/reference/declarations/storage#variable) [`option`](/docs/reference/types#option<T>) [`address`](/docs/reference/types#address) [`none`](/docs/reference/expressions/builtins#none<T>)
[`entry`](/docs/reference/declarations/entrypoint#entry) [`require`](/docs/reference/declarations/entrypoint#require) [`?:`](/docs/reference/expressions/controls#a--b--c) [`effect`](/docs/reference/declarations/entrypoint#effect) [`:=`](/docs/reference/instructions/assignment#a--b) [`caller`](/docs/reference/expressions/constants#caller) [`none`](/docs/reference/expressions/builtins#none) [`address`](/docs/reference/types#address) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`some`](/docs/reference/expressions/builtins#some(v%20:%20T))

## Storage

### `owner`

<Constant data={templates.ownership.owner} />

### `owner_candidate`

<Constant data={templates.ownership.candidate} />

## Entrypoints

### `declare_candidate(candidate)`

<Builtin data={templates.ownership.declare} />


### `claim_candidate()`

<Builtin data={templates.ownership.claim} />