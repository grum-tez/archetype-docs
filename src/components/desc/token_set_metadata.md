import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_token_metadata (tid : nat, tdata: map<string, bytes>) {
  called by owner
  require { r12: is_not_paused() }
  effect {
    token_metadata.add_update(itokenid, { token_id = tid; token_info = tdata });
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#map<K,%20V>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`is_not_paused`](/docs/templates/pausable#is_not_paused) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-)
