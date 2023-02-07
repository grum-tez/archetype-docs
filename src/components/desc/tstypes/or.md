*Generic* class for value that corresponds to the Archetype/Micheline type [`or`](/docs/reference/types#or<T1,%20T2>). The class is parameterized with *left* and *right* types. Its constructor takes an argument of type *left* or *right* and a boolean that is `true` if this is a left value.

Static methods `Left` and `Right` are rather used to make an `Or` value. For example:

```ts
const l = Or.Left<Nat, string>(new Nat(2))
```

To make a right value:
```ts
const r = Or.Right<Nat, string>("Hello Or!")
```


