---
sidebar_position: 6
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';
import NamedDivider from '@site/src/components/NamedDivider.js';

# Pausable

This template is used in many contracts whenever there needs to be able to pause entrypoints. It requires the `Ownership` template.

:::info
It is required to *copy* this template in the created contract to benefit from the pausable pattern.
:::

<TemplateInfo data={templates.pausable.info} />

## Storage

### `paused`

Contract's pausable state.

<NamedDivider title="Code" width="1.5"/>

```archetype
variable paused : bool = false
```

[`variable`](/docs/reference/declarations/storage#variable) [`bool`](/docs/reference/types#bool)

## Functions

### `is_not_paused()`

<Builtin data={templates.pausable.is_not_paused} />

## Entrypoints

### `pause()`

<Builtin data={templates.pausable.pause} />

### `unpause()`

<Builtin data={templates.pausable.unpause} />


