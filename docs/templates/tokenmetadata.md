---
sidebar_position: 3.7
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Token medatada

Implements [TZIP-21](https://tzip.tezosagora.org/proposal/tzip-21/) norm for token metadata.

:::info
It is required to copy this template in the created contract to benefit from the token metadata pattern.
:::

<TemplateInfo data={templates.token_metadata.info} />

## Storage

### `token_metadata`

<Constant data={templates.token_metadata.token_metadata} />

## Entrypoints

### `set_token_metadata(tid, tdata)`

