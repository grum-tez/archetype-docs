Sorts collection `A` according to asset field(s) `f`, in ascending or descending order.

It is possible to sort according to multiple criteria; consider for example the `result` asset:

```archetype
asset result {
  id    : string;
  score : nat;
  time  : duration;
}
```

The following expression sorts `result` assets in `score` decreasing order, then in `time` increasing order; so that the first asset of the resulting [asset_view](/docs/reference/types#asset_view<A>) is the result with the highest score and minimal time:
```archetype
var v := result.sort(desc(score), time)
```
