---
slug: asset-access
title: Accessing assets
authors: [br, gd]
tags: [asset, new feature]
---

We present an improvement in the way [assets](/docs/asset) data are accessed since version [`1.2.16`](https://github.com/edukera/archetype-lang/releases/tag/1.2.16) of Archetype.

### Problem

Until this version, the only way to access an asset data was the field accessor operator of the form `A[k].f`, where `A` is the asset collection, `k` the asset key and `f` the asset field.

For example, consider the following asset declaration:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  year         : nat;
  nbdoors      : nat
}
```

The manufacturer of vehicle `"1G1AF1F57A7192174"` is then accessed as follows:
```archetype
const m = vehicle["1G1AF1F57A7192174"].manufacturer
```

This expression fails when the key is not found in the asset collection. As a consequence, accessing several fields sucessively repeats the test and fail instruction as in:

```archetype
const m = vehicle["1G1AF1F57A7192174"].manufacturer;
const y = vehicle["1G1AF1F57A7192174"].year;
const n = vehicle["1G1AF1F57A7192174"].nbdoors
```

Here the test and fail instructions are repeated three times.

### Solution

It is now possible to retrieve the asset data in the form of a record with the [`[]`](/docs/reference/expressions/asset#ak--asset_keya) operator.

In the example above, the proper way to retrieve all asset data is now as follows:
```archetype
const v = vehicle["1G1AF1F57A7192174"];
const m = v.manufacturer;
const y = v.year;
const n = v.nbdoors
```

The access operator still fails if the key is not `vehicle` collection.

Version [`1.2.16`](https://github.com/edukera/archetype-lang/releases/tag/1.2.16) also introduces the [`getopt`](/docs/reference/expressions/asset#agetoptk--asset_keya) method for asset collection. As for [`map`](/docs/reference/types#map<K,%20V>), it returns an option of record:

```archetype
const k = "1G1AF1F57A7192174";
match vehicle.getopt(k) with
| some v ->
  const m = v.manufacturer;
  const y = v.year;
  const n = v.nbdoors;
  /* ... */
| none -> fail("Key " + k + " not found in collection")
end
```

### Single field access

Situations where a single asset field is accessed is very common though. In this case, version [`1.2.16`](https://github.com/edukera/archetype-lang/releases/tag/1.2.16) provides two new dedicated operators: [`[].?`](/docs/reference/expressions/asset#ak--asset_keyaf) and [`[].?:`](/docs/reference/expressions/asset#ak--asset_keya-f--d).

For example, `is_break` below is true if field `nbdoors` is greater or equal to 5, and `false` if asset is not found:

```archetype
const k = "1G1AF1F57A7192174";
const is_break = vehicle[k].? the.nbdoors >= 5 : false
```

The following retrieves an [`option`](/docs/reference/types#option<T>) of [`nat`](/docs/reference/types#nat) to treat more specifically the case when the asset is not found:
```archetype
const on = vehicle["1G1AF1F57A7192174"].?nbdoors
```


