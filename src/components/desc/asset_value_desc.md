Type of an asset value generated from asset declaration. An asset value is a record that provides all asset fields but the asset identifier field(s).

Consider for example the following asset declaration:
```archetype
asset result {
  id    : string;
  score : nat;
  time  : duration;
}
```

The asset record for `result` is the record with `score` and `time` fields. An asset record value is returned by the [`[]`](/docs/reference/expressions/asset#ak--asset_keya) asset method (and [`getopt`](/docs/reference/expressions/asset#agetoptk--asset_keya)), and fields are accessed normally with `.` operator:
```archetype
const v : asset_value<result> = result["#sub001"];
const s = v.score;
const t = v.time;
```




