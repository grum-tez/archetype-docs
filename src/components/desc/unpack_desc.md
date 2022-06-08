Deserializes a value of type [`bytes`](/docs/reference/types#bytes) into the corresponding value of type `option<T>`.

For example, suppose `p` is a bytes value:
```archetype
const v ?= unpack<nat>(p) : "UNPACK_FAILED";
/* v is typed nat */
 ```