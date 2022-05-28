An iterable big map has the scalability property of a [`big_map`](/docs/reference/types#big_map<K,%20V>) and can be iterated.

Consider the following declaration:
```archetype
variable m : iterable_big_map<nat, string> = []
```

It is then possible to iterate over `m`:
```archetype
for (k,v) in m do
  /* k is the key */
  /* v is the value associated to k */
done
```
An iterable big map is compiled in Michelson as a triplet:
* a big map for the keys
* a big map for the values
* a counter

The detailed mechanism is presented in this [blog entry](/blog/iterable-big-map).

:::info
The order in which keys are iterated is *not* the natural order.
:::

:::caution
The possiblity to iterate comes with an increased cost of [`put`](/docs/reference/instructions#mputk-v) [`remove`](/docs/reference/instructions#mremovek) and [`update`](/docs/reference/instructions#mupdatek--k-o--optiont) operations.
:::