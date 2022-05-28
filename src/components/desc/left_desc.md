Constructs a *left* value typed [`or<L, R>`](/docs/reference/types#or<T1,%20T2>).

The left type `L` may be omitted as it can be inferred, but the right type `R` is mandatory.

For example:
```archetype
const o = left<string>(2)
```

`o` is then typed `option<nat, string>`. It is equivalent to:
```archetype
const o = left<nat, string>(2)
```