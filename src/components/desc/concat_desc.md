### String

Concatenates two [`string`](/docs/reference/types#string) values.

For example:
```archetype
const m = concat("Hello ", "Archetype");
/* m is "Hello Archetype" */
```

It is equivalent to the [`+`](/docs/reference/expressions/operators#a--b) operator.

### Bytes

Concatenates two [`bytes`](/docs/reference/types#bytes) values.

For example:
```archetype
const m = concat(0x48656c6c6f, 0x417263686574797065);
/* m is 0x48656c6c6f417263686574797065 */
```

### List


Concatenates two [`lists`](/docs/reference/types#list<T>) of any element of any type.

It is equivalent to the following code:
```archetype
var res : list<T> = l;
for e in reverse(L) do
  res.prepend(e)
done;
L := res
```

For example:
```archetype
const l = concat([1; 2; 3], [4; 5]);
/* l is [1; 2; 3; 4; 5] */
```

### List of values

Concatenates values of a list, of type [`string`](/docs/reference/types#string) or [`bytes`](/docs/reference/types#bytes)

For example:
```archetype
const m = concat([ "Hello "; "Archetype "; "world!" ]);
/* m is "Hello Archetype world!"*/
```


