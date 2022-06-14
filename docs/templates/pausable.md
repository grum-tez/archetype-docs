---
sidebar_position: 6
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Pausable

This template is used in many contracts whenever there needs to be able to pause entrypoints. It requires the `Ownership` template.

:::info
It is required to *insert* this template in the created contract to benefit from the pausable pattern.
:::

<TemplateInfo data={templates.pausable.info} />

## Storage

### `paused`
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract's pausable state.

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
variable paused : bool = false
```

[`variable`](/docs/reference/declarations/storage#variable) [`bool`](/docs/reference/types#bool)
</TabItem>

</Tabs>

## Entrypoints

## Functions

