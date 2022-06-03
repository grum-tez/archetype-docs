Aborts entrypoint if optional value `e` is `some` value.

It is equivalent to:
```archetype
match e with
| some(v) -> fail(v)
| none    -> ()
end
```