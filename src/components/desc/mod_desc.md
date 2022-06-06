
Returns the euclidean remainder of `a` divided by `b` (modulus); `a % b` is equivalent to:
```archetype
match a /% b with
| some(q,r) -> r
| none -> fail("DIV_BY_ZERO")
end
```