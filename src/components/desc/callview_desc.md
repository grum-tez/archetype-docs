Calls a contract's [view](/docs/reference/declarations/view) and returns an [`option<T>`](/docs/reference/types#option<T>) of the result.

For example, consider the following view declaration in contract `A`:
```archetype
view affine(x : rational) : rational {
    return (2 * x + 3)
}
```

Call this function from contract `B` with:
```archetype
const r ?= call_view<rational>(addr_A, "affine", -3/2) : "AFFINE_ERR"
```