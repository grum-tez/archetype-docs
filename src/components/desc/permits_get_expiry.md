import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function get_expiry(addr : address, permit_key : bytes) : nat {
  return (permits[addr] ? let d = the.user_expiry in
    (the.user_permits[permit_key] ? the.expiry : d) : default_expiry
  )
}
```

[`function`](/docs/reference/declarations/function) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes) [`nat`](/docs/reference/types#nat) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c) [`let`](/docs/reference/expressions/declaration) [`[]`](/docs/reference/expressions/operators/access#map)