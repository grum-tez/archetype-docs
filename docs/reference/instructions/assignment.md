---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Assignment

import { assignments } from '../assignments.js';
import Operator from '@site/src/components/Operator.js';

### `a := b`

#### Local variable

Assigns value of expression `b` to *variable* `a`. Type of `b` must be the same as (or compliant with) the type of `a`.

All [types](/docs/reference/types) are assignable, except [`ticket`](/docs/reference/types#ticket<T>)

For example:
```archetype
var s = "a string";
s := "another string"
```

#### Tuple

Assigns a dimension of a [`tuple`](/docs/language-basics/composite#tuple) *variable*.

For example:
```archetype
var t = (2, "a string");
t[0] := 4;
t[1] := "another string";
/* t is (4, "another string") */
```

#### Record

Assigns a field value of a [`record`](/docs/language-basics/composite#record) *variable*.

For example, consider the following [record](/docs/reference/declarations/compositetypes#record) declaration:
```archetype
record color {
  red   : bytes;
  green : bytes;
  blue  : bytes
}
```

Then the following assigns the `red` field:
```archetype
var r = { red = 0xc6; green = 0x6d; blue = 0x32 };
r.red := 0xc8;
/* r is { red = 0xc8; green = 0x6d; blue = 0x32 } */
```

:::info
Other assignment operators below are also available for tuple dimension and record field.
:::

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
