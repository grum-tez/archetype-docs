Removes all assets referenced by [`asset_view`](/docs/reference/types#asset_view<A>) `A`.

For example, the following instruction removes all [cars](/docs/reference/instructions/asset#aupdatek--u-) assets owned by `caller` :
```archetype
car.select(the.owner = caller).clear()
```

This is equivalent to:
```archetype
const v = car.select(the.owner = caller);
for k in v do
  car.remove(k)
done

