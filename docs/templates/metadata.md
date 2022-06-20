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

Below is a typical metadata file:

```json title="my_dapp_metadata.json"
{
  "name": "My Dapp",
  "description": "A description of My Dapp",
  "version": "1.0",
  "license": { "name": "MIT" },
  "authors": ["Mysterious team <contact@my_company.com>"],
  "homepage": "https://my_dapp.com",
  "interfaces": ["TZIP-012", "TZIP-016", "TZIP-017", "TZIP-021"]
}
```

There are 2 ways to associate this metadata to a contract:
1. upload the file to a public URI (typically `ipfs`) and store the URI in the contract's [`metadata`](/docs/reference/expressions/variables#metadata) map (as the value of key `""`)
2. store it in the contract's [`metadata`](/docs/reference/expressions/variables#metadata) map

The association may be done *at deployment* time with [Completium CLI](https://completium.com/docs/cli):

With public URI:
```bash
completium-cli deploy my_dapp.arl --metadata-uri "ipfs://..."
```

With stored metadata:
```bash
completium-cli deploy my_dapp.arl --metadata-storage "./my_dapp_metadata.json"
```

This can also be done once the contract is deployed with the [`set_metadata`](/docs/templates/metadata#set_metadatak-d) entrypoint:
```bash
completium-cli call my_dapp --entry set_metadata --arg '{ "k": "", "v": "ipfs://..." }'
```
