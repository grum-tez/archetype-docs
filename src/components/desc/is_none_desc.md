Returns `false` if an optional value `o` is `some`, `true` otherwise.

It is equivalent to the following expression:
```archetype
o ? false : true
```

or equivalently:
```archetype
match o with
| some(v) -> false
| none    -> true
end
```