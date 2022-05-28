Applies a lambda value `f` to argument `x`.

For example:
```archetype
const plus_three = lambda((x : nat) -> x + 3);
const r = exec_lambda(plus_three, 1);
/* r is equal to 4 */
```
