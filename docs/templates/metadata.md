---
sidebar_position: 3.5
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Metadata

Implements [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) norm for contract's metadata.

<TemplateInfo data={templates.metadata.info} />

## Storage

### `metadata`

The [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) metadata map is declared with the native [`with metadata`](/docs/reference/declarations/contract#metadata) declaration.

## Entrypoints

### `set_metadata(k, d)`

<Builtin data={templates.metadata.set_metadata} />

## Example

```json
{
  "name": "My Coin",
  "description": "An example of My Coin",
  "version": "1.0",
  "license": { "name": "MIT" },
  "authors": ["Mysterious team <contact@my_company.com>"],
  "homepage": "https://my_company.com",
  "interfaces": ["TZIP-012", "TZIP-016", "TZIP-017", "TZIP-021"]
}
```

