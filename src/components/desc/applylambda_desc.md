Executes [partial application](https://en.wikipedia.org/wiki/Partial_application) of a lambda value `f` to an argument value `x`.

For example:
```archetype
const plus_x = lambda<nat>((a : nat * nat) -> a[0] + a[1]);
const plus_three = apply_lambda(plus_x, 3);
const r = exec_lambda(plus_three, 1);
/* r is equal to 4 */
```
