Returns the euclidean quotient of two `a` divided by `b`; `a div b` is equivalent to:
```archetype
match a /% b with
| some(q,r) -> q
| none -> fail("DIV_BY_ZERO")
end
```