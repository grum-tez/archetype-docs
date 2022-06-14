---
sidebar_position: 7
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Ownership

This template is used in many contracts whenever there needs a special address to administrate the contract. The ownership of the contract may be transferred.

:::info
It is required to *insert* this template in the created contract to benefit from the ownership pattern.
:::

<TemplateInfo data={templates.ownership.info} />

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