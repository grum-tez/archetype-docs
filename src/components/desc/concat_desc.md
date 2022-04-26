Concatenates list `l` to list `L`.

It is equivalent to the following code:
```archetype
var res : list<T> = l;
for e in reverse(L) do
  res.prepend(e)
done;
L := res
```