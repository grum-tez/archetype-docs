Map from `K`-typed key to `V`-typed value, that can deal with a high number of keys.

The issue with a standard map is that the cost of *deserialisation* becomes prohibitive as the number of keys increases. Indeed a map, as well as any storage element, is stored in a serialised format, and gets deserialised each time the contract storage is accessed.

A big map is not stored in the contract storage, but rather has its own dedicated storage; it is *referenced* from the contract storage by an integer value, hence the deserialisation cost of the contract storage is not impacted by the number of keys in the big map.

:::info
The constraint is that a big map is **not** iterable (because only a *hash* of the key is stored, not the key itself). It means that [`for`](/docs/reference/instructions#for), [`while`](/docs/reference/instructions#while) and [`iter`](/docs/reference/instructions#iter) instructions are not available for big maps.
:::