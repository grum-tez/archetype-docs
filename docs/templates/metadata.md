---
sidebar_position: 7
---

# Contract Metadata


## Storage

### `metadata`

```archetype
archetype my_contract
with metadata ""
```

## Entrypoints

### `set_metadata(k, d)`

```archetype
entry set_metadata(k: string, d : bytes) {
  called by owner
  require { r3 : is_not_paused() }
  effect {
    metadata.put(k, d)
  }
}
```

