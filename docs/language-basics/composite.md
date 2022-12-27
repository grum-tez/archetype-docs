---
sidebar_position: 10
---

import { record } from './record.js';
import { tuple } from './tuple.js';
import { enums } from './enum.js';
import Api from '../../src/components/Api.js';

# Composite types

## Tuple

A [tuple](/docs/reference/types#tuple) is a fixed-length list of values of *different* types.

For example:
```archetype
const p = (0, "a string");
```

`p` is a pair of a [`nat`](/docs/reference/types#nat) and [`string`](/docs/reference/types#string) values, typed `nat * string`.

Find more information in the [Declaration](/docs/reference/declarations/compositetypes#tuple) section.

Below is the list of tuple-related instructions and operators.

<Api title="Instructions" data={tuple.instructions} />
<br/>
<Api title="Operators" data={tuple.operators} />
<br/>

## Record

A [record](/docs/reference/types#record) is fixed-length list of *named* values of different types.

For example, a `person` record is declared as follows:
```archetype
record person {
  first : string;
  last  : string;
  birth : date;
}
```

Find more information in the [Declaration](/docs/reference/declarations/compositetypes#record) section.

A literal for the `person` record is for example:
```archetype
const p = {
  first = "Albert";
  last  = "Michelson";
  birth = 1852-12-19;
}
```

Below is the list of record-related instructions and operators.

<Api title="Instructions" data={record.instructions} />
<br/>
<Api title="Operators" data={record.operators} />
<br/>

## Enum

An enumeration is an *union* of named label types.

For example, `float` is either `Pos`, `Neg` or `Zero`:
```archetype
enum float =
| Pos<nat * nat>
| Neg<nat * nat>
| Zero
```

Find more information in the [Declaration](/docs/reference/declarations/compositetypes#enum) section.

Literals for the `sign` enumeration are:
```archetype
const p = Pos((6, 5));
const n = Neg((3,2));
const z = Zero;
```

Below is the list of enumeration-related instructions and operators.

<Api title="Instructions" data={enums.instructions} />
<br/>
<Api title="Operators" data={enums.expressions} />
<br/>

