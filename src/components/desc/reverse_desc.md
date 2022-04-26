Reverses the position of elements in `L`.

It is equivalent to the following code:
```archetype
var rev : list<T> = [];
for e in L do
  rev.prepend(e)
done;
L := rev
```