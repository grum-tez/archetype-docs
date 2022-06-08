---
sidebar_position: 7
---

# View

A view is a *function* that can be called by other contracts.

Like [functions](/docs/reference/declarations/function), a view is *read only*, that is it does *not* modify the contract's storage *nor* does generate [operations](/docs/reference/instructions/operation).

It is declared with the `view` keyword followed by the view's identifier and arguments. It returns a value whose type is declared after `:`.

For example:
```archetype
view affine(x : rational) : rational {
  return (2 * x + 3)
}
```

The view's body use the `return` keyword to return the result.

A view is called with the [`call_view`](/docs/reference/expressions/builtins#call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)) builtin.