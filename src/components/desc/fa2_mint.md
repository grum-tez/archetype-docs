import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry mint (tow : address, tid : nat, tmd: map<string, bytes>, roy : list<part>) {
  called by owner
  require { r11: is_not_paused() }
  effect {
    ledger.add({ ltokenid = itokenid; lowner = iowner });
    token_metadata.addupdate(itokenid, {
      token_id = itokenid;
      token_info = itokenMetadata
    });
    royalties.put({ rtokenid = itokenid; rvalue = iroyalties });
  }
}
```