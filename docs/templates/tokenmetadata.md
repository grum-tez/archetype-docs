---
sidebar_position: 3.7
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Token medatada

Implements [TZIP-21](https://tzip.tezosagora.org/proposal/tzip-21/) norm for token metadata.

<TemplateInfo data={templates.token_metadata.info} />

## Code

:::info
It is required to *copy* this code in the created contract to benefit from the token metadata pattern.
:::

```archetype
/* Token Metadata ------------------------------------------------------------ */
asset token_metadata to big_map {
  ftoken_metadata : nat;
  token_id        : nat;
  token_info      : map<string, bytes>;
}

entry set_token_metadata (tid : nat, tdata: map<string, bytes>) {
  called by owner
  require { r12: is_not_paused() }
  effect {
    token_metadata.add_update(itokenid, { token_id = tid; token_info = tdata });
  }
}
```
[`asset`](/docs/asset) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#bytes) [`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#map<K,%20V>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`is_not_paused`](/docs/templates/pausable#is_not_paused) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-)



## Storage

### `token_metadata`

<Constant data={templates.token_metadata.token_metadata} />

## Entrypoints

### `set_token_metadata(tid, tdata)`

<Builtin data={templates.token_metadata.set_token_metadata} />

## Examples

### Fongible token

```json
{
  "symbol": "MyC",
  "name": "My Coin",
  "decimals": 6,
  "description": "An example of My Coin",
  "thumbnailUri": "ipfs://QmPibs6dkHjoJAkE9BiPURCnCBfphaT7P6y5MZ4eTYtyS9",
  "isTransferable": true,
  "isBooleanAmount": false,
  "shouldPreferSymbol": false
}
```

