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

:::info
When calling a *local* view (defined in current contract), it is sufficient to prefix the view name by `self.`. For example, calling the local `affine` view is done as follows:

```archetype
const r ?= self.affine(-3/2) : "AFFINE_ERR"
```

:::