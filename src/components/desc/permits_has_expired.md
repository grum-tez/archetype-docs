import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function has_expired(up : user_permit, e : nat) : bool {
  return (up.created_at + (up.expiry ? the : e) * 1s < now)
}
```