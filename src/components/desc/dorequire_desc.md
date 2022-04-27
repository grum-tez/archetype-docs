Aborts entrypoint if test expression `t` is `false`.

It is equivalent to:
```archetype
if not t then
  fail(e)
```
