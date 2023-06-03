Builds a [lambda](/docs/reference/types#lambda<T,%20R>) expression from michelson code.

For example:

```archetype
const size : lambda<string, nat> = lambda_michelson<string, nat>({SIZE});
```
