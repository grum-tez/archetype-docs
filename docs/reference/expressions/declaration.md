---
sidebar_position: 5.5
---

# Declaration

It is possible to declare a constant in an expression with the `let c = v in e` declaration expression: constant `c` is replaced by the evaluation of expression `v` in expression `e`.

For example,
```archetype
const reward =
  let is_owner = (caller = owner) in
    if not is_owner then
      5% * balance
    else
      0tz;
/* is_owner is not defined beyond expression scope */
```

The expression above also uses the conditional expression [`if then else`](/docs/reference/expressions/controls#if-then-else).

Constant declaration may be useful to *factorise* computation in more complex expressions.

Note that the scope of the declared constant is limited to the expression.