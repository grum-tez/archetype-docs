Constructs a *right* value typed [`or<L, R>`](/docs/reference/types#or<T1,%20T2>).

The left type `L` is mandatory, while the right type `R` may be omited as it can be inferred.

For example:
```archetype
const o = right<nat>("abc")
```

`o` is then typed `option<nat, string>`. It is equivalent to:
```archetype
const o = right<nat, string>("abc")
```