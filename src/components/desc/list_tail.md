Returns the last n elements of list `L` according to its order:

```archetype
  t0 := tail([0; 1; 2], 2); /* t0 = [1; 2] */
```

If `n` is greater than `length(L)`, then the entire list is returned:

```archetype
  t1 := tail([0; 1; 2], 4); /* t1 = [0; 1; 2] */
```
