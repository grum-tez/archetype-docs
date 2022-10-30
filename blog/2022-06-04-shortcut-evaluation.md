---
slug: shortcut-evaluation
title: Shortcut evaluation
authors: [gd]
tags: [and, or, if, new feature]
---

We present a change in version `1.3.0` of the evaluation process of boolean operators [`and`](/docs/reference/expressions/operators/arithmetic#a-and-b) and [`or`](/docs/reference/expressions/operators/arithmetic#a-or-b) in test expression of the [`if`](/docs/reference/instructions/control#if) instruction and expression.

Consider the following `if` instruction:
```archetype
if a and b then
 /* */
end
```
<!--truncate-->

Before version `1.3.0`, both expressions `a` and `b` were evaluated, meaning that if `b` is a [failing](/docs/reference/instructions/divergent#faile) expression, the evaluation fails even if `a` is false.

Since version `1.3.0`, `a and b` is replaced by [conditional](/docs/reference/expressions/controls#if) expression:
```archetype
if a then b else false
```

Equivalently, expression `a or b` is replaced by:
```archetype
if a then true else b
```

Such that expression `b` is evaluated only when necessary.

### Greedy evaluation

The previous *greedy evaluation*  mechanism is still  available with the [`greedy_and`](/docs/reference/expressions/builtins#greedy_and(a%20:%20bool,%20b%20:%20bool)) and [`greedy_or`](/docs/reference/expressions/builtins#greedy_or(a%20:%20bool,%20b%20:%20bool)) builtins.
