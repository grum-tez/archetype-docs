import NamedDivider from '@site/src/components/NamedDivider.js';

Unpauses contract when paused.

<NamedDivider title="Code" width="1.5"/>

```archetype
entry unpause() {
  called by owner
  require {
    pausable_r2: paused otherwise "CONTRACT_NOT_PAUSED"
  }
  effect {
    paused := false
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`:=`](/docs/reference/instructions/assignment#a--b)
