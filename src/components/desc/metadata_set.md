import NamedDivider from '@site/src/components/NamedDivider.js';

Adds or removes an entry to the [`metadata`](/docs/reference/expressions/variables#metadata) map.

<NamedDivider title="Code" width="1.5"/>

```archetype
/* METADATA ---------------------------------------------------------------- */

entry set_metadata(k: string, d : option<bytes>) {
  called by owner
  require { r3 : is_not_paused() }
  effect {
    metadata := update(metadata, k, d)
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`string`](/docs/reference/types#string) [`option`](/docs/reference/types#option<T>) [`bytes`](/docs/reference/types#bytes) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`metadata`](/docs/reference/expressions/variables#metadata) [`update`](/docs/reference/instructions/containers#mupdatek--k-o--optiont)
