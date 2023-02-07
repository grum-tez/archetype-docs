Returns the first n elements of list `L` according to its order:
```archetype
  h0 := head([0; 1; 2], 2); /* h0 = [0; 1] */
```

If `n` is greater than `length(L)`, then the entire list is returned:

```archetype
  h1 := head([0; 1; 2], 4); /* h1 = [0; 1; 2] */
```
