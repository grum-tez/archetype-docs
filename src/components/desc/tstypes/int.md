Class for integer value that corresponds to Archetype/Michelson type [`int`](/docs/reference/types#int). It uses the [bignumber.js](https://mikemcl.github.io/bignumber.js/) package to support the arbitrary-precision feature of Tezos.

There are several ways to construct an `Int` value:

From `number`:

```ts
const i = new Int(-3)
```

From `string`:

```ts
const i = new Int("0987654323456789876543456789876543456789876543456789876543")
```

From `bignumber`:

```ts
const bn = new BigNumber("0987654323456789876543456789876543456789876543456789876543")
const i = new Int(bn)
```
