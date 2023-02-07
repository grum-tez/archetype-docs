Class for a duration value that corresponds to Archetype type [`duration`](/docs/reference/types#duration). Its constructor takes a string value that is the Archetype literal.

For example, a duration of 10 seconds:
```ts
const d1 = new Duration("10s") // 10 seconds
```

A duration of 5 minutes:
```ts
const d2 = new Duration("5m") // 5 minutes
```

A duration of 18 hours:
```ts
const d3 = new Duration("18h") // 18 hours
```

A duration of one week:
```ts
const d4 = new Duration("1w") // 1 week
```

A duration of 5 minutes and 10 seconds:
```ts
const d5 = new Duration("5m10s")
```

A duration of 3 weeks, 8 days, 4 hours, 34 minutes and 18 seconds:
```ts
const d6 = new Duration("3w8d4h34m18s")
```
