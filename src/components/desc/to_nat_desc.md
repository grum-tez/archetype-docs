[NEW] Converts an int to a nat. It is equivalent to the following expression:
```archetype
match isnat(i) with
| some(v) -> v
| none -> fail("NEG_VALUE")
end
```