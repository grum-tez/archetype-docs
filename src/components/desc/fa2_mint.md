import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry mint (tow : address, tid : nat, tmd: map<string, bytes>, roy : list<part>) {
  called by owner
  require { r11: is_not_paused() }
  effect {
    ledger.add({ ltokenid = tid; lowner = tow });
    token_metadata.add_update(tid, {
      token_id   = tid;
      token_info = tmd
    });
    royalties.put({ rtokenid = tid; rvalue = roy });
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#bytes) [`list`](/docs/reference/types#list<T>) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add`](/docs/reference/instructions/asset#aadda) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) [`put`](/docs/reference/instructions/asset#aputa)