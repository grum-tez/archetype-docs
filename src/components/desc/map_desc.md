Maps a value of type [`list<T>`](/docs/reference/types#list<T>), [`map<K, V>`](/docs/reference/types#map<K,%20V>), or [`option<T>`](/docs/reference/types#option<T>).

### List

Applies an inlined function of type `T -> T` on each element of a list of elements typed `T` and returns a new list.

For example:
```archetype
const l = map([ 1; 2 ; 3 ], x -> 2 * x + 1);
/* l is [ 3; 5; 7 ] */
```

### Map

Applies an inlined function of type `(K * V) -> V` on each value of a map with key of type `K` and value of type `V`; it returns a new map.

For example:
```archetype
const m = map([ ("a", 5); ("b", 6); ("c", 7) ], x -> 2 * x[1] + 1)
/* m is [ ("a", 11); ("b", 13); ("c", 15) ] */
```

Note that the `x` intput of the inlined mapping function is a *pair* (key and value) of the map; hence `x[0]` is the key and `x[1]` is the value.

### Option

Applies an inlined function of type `T -> T` to the `some` value of an `option<T>` value, or returns `none`.

For example:
```archetype
const o1 = map(some(2), x -> 2 * x + 1);
/* o1 is some(5) */
const o2 = map(none, x -> 2 * x + 1);
/* o2 is none */
```

Note that the ` ? :` syntax is also available to fold an option. The above example is then equivalent to:
```archetype
const o1 = some(2) ? 2 * the + 1 : none;
/* o1 is some(5) */
```
