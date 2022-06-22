import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_default_expiry(v : nat) {
  called by owner
  require { p3: is_not_paused() }
  effect {
    default_expiry := v
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`:=`](/docs/reference/instructions/assignment#a--b)