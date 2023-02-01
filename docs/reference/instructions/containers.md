---
sidebar_position: 5
---

# Basic containers

import { containerinstructions } from '../containerinstructions.js';
import Builtin from '@site/src/components/Builtin.js';

## Set
### `S.add(e)`

<Builtin data={containerinstructions['setadd']} />

### `S.remove(e)`

<Builtin data={containerinstructions['setremove']} />

### `S.update(e, b)`

<Builtin data={containerinstructions['setupdate']} />

## List

### `L.prepend(e)`

<Builtin data={containerinstructions['prepend']} />

### `L.reverse()`

<Builtin data={containerinstructions['reverse']} />

### `L.concat(l)`

<Builtin data={containerinstructions['concat']} />

### `L.head(i : nat)`

<Builtin data={containerinstructions['head']} />


### `L.tail(i : nat)`

<Builtin data={containerinstructions['tail']} />

## Map

### `M.put(k, v)`

<Builtin data={containerinstructions['put']} />

### `M.remove(k)`

<Builtin data={containerinstructions['mapremove']} />

### `M.update(k : K, o : option<T>)`

<Builtin data={containerinstructions['update']} />
