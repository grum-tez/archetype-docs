Deserializes a value of type [`bytes`](/docs/reference/types#bytes) into the corresponding value of type `option<T>`.

For example, suppose `p` is a bytes value:
```archetype
var v = 0;
match unpack<nat>(p) with with
| some(n) -> v := n
| none    -> fail("Unpack failed")
end;
/* v is typed nat */
 ```