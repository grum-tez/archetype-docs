import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function get_default_expiry(addr : address) : nat {
  return (permits[addr] ? (the.user_expiry ? the : default_expiry) : default_expiry)
}
```

[`function`](/docs/reference/declarations/function) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`?:`](/docs/reference/expressions/controls#a--b--c)