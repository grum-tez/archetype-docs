import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record user_permit {
  expiry : option<nat>;
  created_at : date;
}

asset permits to big_map {
  user_address : address;
  counter      : nat = 0;
  user_expiry  : option<nat> = none;
  user_permits : map<bytes, user_permit> = [];
}
```

[`record`](/docs/reference/types#record) [`option`](/docs/reference/types#option<T>) [`nat`](/docs/reference/types#nat) [`date`](/docs/reference/types#date) [`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`map`](/docs/reference/types#map<K,%20V>) [`bytes`](/docs/reference/types#bytes)