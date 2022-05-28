Returns `true` if an optional value `o` is `some`, `false` otherwise.

It is equivalent to the following expression:
```archetype
o ? true : false
```

or equivalently:
```archetype
match o with
| some(v) -> true
| none    -> false
end
```