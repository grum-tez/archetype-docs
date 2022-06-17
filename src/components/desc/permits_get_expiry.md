import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function get_expiry(addr : address, permit_key : bytes) : nat {
  return (permits[addr] ? let d = the.user_expiry in
    (the.user_permits[permit_key] ? the.expiry : d) : default_expiry
  )
}
```