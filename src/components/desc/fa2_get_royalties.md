import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
view get_royalties(tokenId : nat) : list<part> {
  return (royalties[tokenId] ? the.rvalue : make_list<part>([]))
}
```
[`view`](/docs/reference/declarations/view) [`nat`](/docs/reference/types#nat) [`list`](/docs/reference/types#list<T>) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c) [`make_list`](/docs/reference/expressions/builtins#make_list<T>(l))