`fold` applies the *inlined* function `f` to the `left` of initial value `i`:
* if it returns a `left` value, it applies `f` to the result of `f(i)`, and iteratively applies f on as long as it returns a `left` value.
* if it returns a `right` value, iteration stops, and the `right` value is returned.

Hence the application may be represented as:
`fold(i, f) = right(f(...(f(i))))`

For example, the following expression *reverses* the list `l` typed `list<nat>`:
```archetype
var empty : list<nat> = [];
var p : or<list<nat> * list<nat>, list<nat>> = left<list<nat>> ((empty, l));
res := fold (p, x ->
  match x[1] with
   | hd::tail -> left<list<nat>> ((prepend(x[0], hd), tail))
   | []       -> right<list<nat> * list<nat>>(x[0])
  end
)
```

:::note
Folded function is inlined and cannot be a [`lambda`](/docs/reference/types#lambda<T,%20R>) variable.
:::


