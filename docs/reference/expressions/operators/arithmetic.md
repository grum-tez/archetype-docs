---
sidebar_position: 1
---

# Arithmetic
import ThemedDivider from '@site/src/components/Divider.js'
import Api from '@site/src/components/Api.js';
import Operator from '@site/src/components/Operator.js';
import { operators } from './operators.js';

### `a + b`

<Operator data={operators['add']} />

### `a - b`

<Operator data={operators['sub']} />

### `- a`

<Operator data={operators['minus']} />

### `a * b`

<Operator data={operators['mult']} />

### `a / b`

<Operator data={operators['slash']} />

### `a div b`

<Operator data={operators['div']} />

### `a % b`

<Operator data={operators['mod']} />

### `a /% b`

<Operator data={operators['divmod']} />

### `a <<| b`

<Operator data={operators['lsl']} />

### `a |>> b`

<Operator data={operators['lsr']} />

### `a and b`

<Operator data={operators['and']} />

### `a or b`

<Operator data={operators['or']} />

### `a xor b`

<Operator data={operators['xor']} />

### `not a`

<Operator data={operators['not']} />

### `a = b`

<Operator data={operators['eq']} />

### `a <> b`

<Operator data={operators['neq']} />

### `a < b`

<Operator data={operators['lt']} />

### `a <= b`

<Operator data={operators['lteq']} />

### `a > b`

<Operator data={operators['gt']} />

### `a >= b`

<Operator data={operators['gteq']} />

### `a <=> b`

<Operator data={operators['cmp']} />

### `a < b < c`

Double inequality operators are syntactic shortcuts for logical conjonction of two comparisons:

<Api title="Equivalence" data={operators.doubleinequality.equivalence} xs={4}/>
<br/>
