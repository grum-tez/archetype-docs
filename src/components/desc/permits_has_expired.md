import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function has_expired(up : user_permit, e : nat) : bool {
  return (up.created_at + (up.expiry ? the : e) * 1s < now)
}
```

[`function`](/docs/reference/declarations/function) [`bool`](/docs/reference/types#bool) [`+`](/docs/reference/expressions/operators/arithmetic#a--b) [`?:`](/docs/reference/expressions/controls#a--b--c) [`*`](/docs/reference/expressions/operators/arithmetic#a--b-1) [`<`](/docs/reference/expressions/operators/arithmetic#a--b-9) [`now`](/docs/reference/expressions/constants#now)