import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record part {
  partAccount : address;
  partValue   : nat;
}

asset royalties identified by rtokenid to big_map {
  rtokenid : nat;
  rvalue : list<part>;
}
```