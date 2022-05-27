---
sidebar_position: 2
---

# Assignment

import { assignments } from '../assignments.js';
import Operator from '@site/src/components/Operator.js';

### `a := b`

Assigns value of expression `b` to *variable* `a`. Type of `b` must be the same as (or compliant with) the type of `a`.

All [types](/docs/reference/types) are assignable, except [`ticket`](/docs/reference/types#ticket<T>)

### `a += b`

<Operator data={assignments['plusequal']} />

### `a -= b`

<Operator data={assignments['minusequal']} />

### `a *= b`

<Operator data={assignments['timesequal']} />

### `a /= b`

<Operator data={assignments['divequal']} />

### `a &= b`

<Operator data={assignments['andequal']} />

### `a |= b`

<Operator data={assignments['orequal']} />
