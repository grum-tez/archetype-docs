import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record part {
  part_account : address;
  part_value   : nat;
}

asset royalties identified by rtokenid to big_map {
  rtokenid : nat;
  rvalue : list<part>;
}
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`asset`](/docs/asset) [`list`](/docs/reference/types#list<T>)