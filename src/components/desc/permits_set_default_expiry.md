import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_default_expiry(v : nat) {
  called by owner
  require { r6: is_not_paused() }
  effect {
    default_expiry := v
  }
}
```