*Generic* class for an optional value that corresponds to Archetype/Michelson type [`option`](/docs/reference/types#option<T>). The class is parameterized with the type of the optional value. Its constructor takes the optional value, `null` or `undefined`.

For example, an optional natural value:
```ts
const o1 = new Option<Int>(new Nat(42))
```

An optional string, using the `Some` static method:
```ts
const o2 = new Option.Some<string>("Hello Option!")
```

A `none` value of `Int`, using the `None` static method:
```ts
const o3 = new Option.None<Int>() // typed Option<Int>
```
