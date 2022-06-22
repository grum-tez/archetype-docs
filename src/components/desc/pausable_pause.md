import NamedDivider from '@site/src/components/NamedDivider.js';

Pauses contract when unpaused.

<NamedDivider title="Code" width="1.5"/>

```archetype
entry pause() {
  called by owner
  require {
    pausable_r1: is_not_paused()
  }
  effect {
    paused := true
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect)  [`:=`](/docs/reference/instructions/assignment#a--b)
