Class for a tez value that corresponds to Archetype type [`tez`](/docs/reference/types#tez) and Michelson type `mutez`. Its constructor takes a value of type `string`, `number` or `bignumber`, and an optional string value for unit that is either `"tez"` or `"mutez"` (defaulted to `"tez"` when not specified).

For example, five tez:
```ts
const amount = new Tez(5)
```

Again five tez from mutez value:
```ts
const amount = new Tez("5000000", "mutez")
```
