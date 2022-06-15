import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
asset token_metadata to big_map {
  ftoken_metadata : nat;
  token_id        : nat;
  token_info      : map<string, bytes>;
}
```

[`asset`](/docs/asset) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#bytes)