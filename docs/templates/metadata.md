---
sidebar_position: 7
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Contract Metadata

Implements [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) norm for contract's metadata.

:::info
It is required to copy this template in the created contract to benefit from the ownership pattern.
:::
<TemplateInfo data={templates.metadata.info} />

## Storage

### `metadata`

The [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) metadata map is declared with the native [`with metadata`](/docs/reference/declarations/contract#metadata) declaration.

## Entrypoints

### `set_metadata(k, d)`

<Builtin data={templates.metadata.set_metadata} />


