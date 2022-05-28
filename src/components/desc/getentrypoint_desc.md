Returns an [`option`](/docs/reference/types#option<T>) of contract's entrypoint (typed [`contract<T>`](/docs/reference/types#contract<T>)) to the entrypoint `s` with argument `T` at contract address `a`.

For example, consider the following contract at address `a`:
```archetype
archetype example

entry exec(n : nat) { /* ... */ }

```
The `exec` entrypoint may be retrieved with:
```archetype
const e = get_entrypoint("%exec", a) ? the : fail("EXEC_NOT_FOUND")
```

The entrypoint may then be used as an argument of [`make_operation`](/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)).