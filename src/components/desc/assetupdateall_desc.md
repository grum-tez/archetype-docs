Updates one or several fields of all assets of a collection, [aggregate](/docs/asset#aggregate), [partition](/docs/asset#partition) or [asset_view](/docs/reference/types#asset_view<A>) `A`.

For example, the following instruction increments by `1` the `nb_repairs` field of all [cars](/docs/reference/instructions/asset#aupdatek--u-) owned by `caller`:
```archetype
car.select(the.owner = caller).update_all({ nb_repairs += 1 })
```

This is equivalent to:
```archetype
const v = car.select(the.owner = caller);
for k in v do
  car.update(k, { nb_repairs += 1 })
done
```