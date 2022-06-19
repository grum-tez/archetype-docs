import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
view get_royalties(tokenId : nat) : list<part> {
  return (royalties[tokenId] ? the.rvalue : make_list<part>())
}
```