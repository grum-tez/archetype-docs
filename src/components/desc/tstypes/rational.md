Class for a rational value that corresponds to the Archetype type [`rational`](/docs/reference/types#rational). Its constructor takes an argument of type `number`, `string` or [`bignumber`](https://mikemcl.github.io/bignumber.js/) for aritrary precision arithmetic.

There are several ways to construct an `Rational` value:

From `number`:

```ts
const r = new Rational(-3.6)
```

From `string`:

```ts
const r = new Int("98.7654323456789876543456789876543456789876543456789876543")
```

From `bignumber`:

```ts
const bn = new BigNumber("98.7654323456789876543456789876543456789876543456789876543")
const r = new Rational(bn)
```

From two `bignumber` values (numerator and denominator):
```ts
const n = new BigNumber("567")
const d = new BigNumber("37")
const r = new Rational(n, d)
```

