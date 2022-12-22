Class for natural value that corresponds to Archetype type [`nat`](/docs/reference/types#nat). It uses the [bignumber.js](https://mikemcl.github.io/bignumber.js/) package to support the arbitrary-precision feature of Tezos.

There are several ways to construct an `Nat` value:

From `number`:

```ts
const n = new Int(42)
```

From `string`:

```ts
const n = new Int("0987654323456789876543456789876543456789876543456789876543")
```

From `bignumber`:

```ts
const bn = new BigNumber("0987654323456789876543456789876543456789876543456789876543")
const n = new Int(bn)
```
