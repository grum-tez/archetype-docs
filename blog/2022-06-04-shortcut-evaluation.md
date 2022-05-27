---
slug: shortcut-evaluation
title: Shortcut evaluation
authors: [gd]
tags: [and, or, if, new feature]
---

We present a change in version `1.2.17` of the evaluation process of boolean operators [`and`](/docs/reference/expressions/operators#a-and-b) and [`or`](/docs/reference/expressions/operators#a-or-b) in test expression of the [`if`](/docs/reference/instructions#if) instruction and expression.

<!--truncate-->

Consider the following `if` instruction:
```archetype
if a and b then
 /* */
end
```

Before version `1.2.7`, both expressions `a` and `b` were evaluated, meaning that if `b` is a [failing](/docs/reference/instructions#faile) expression, the evaluation fails even if `a` is true.

Since version `1.2.7`, `a and b` is replaced by [conditional](/docs/reference/expressions/controls#if) expression:
```archetype
if a then b else false
```

Equivalently, expression `a or b` is replaced by:
```archetype
if a then true else b else false
```

Such that expression `b` is evaluated only when necessary.

