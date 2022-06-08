---
slug: asset-access
title: Accessing assets
authors: [gd]
tags: [asset, new feature]
---

We present an improvement in the way [assets](/docs/asset) data are accessed since version [`1.3.0`](https://github.com/edukera/archetype-lang/releases/tag/1.3.0) of Archetype.

### Problems

Until this version, the only way to access an asset data was the field accessor operator of the form `A[k].f`, where `A` is the asset collection, `k` the asset key and `f` the asset field.

<!--truncate-->

The first problem was the access to multiple fields; for example, consider the following asset declaration:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  year         : nat;
  nbdoors      : nat
}
```

Accessing several fields would end up with accessing the underlying map several times:

```archetype
const m = vehicle["1G1AF1F57A7192174"].manufacturer;
const y = vehicle["1G1AF1F57A7192174"].year;
const n = vehicle["1G1AF1F57A7192174"].nbdoors
```

Here the test and fail instructions were repeated three times.

The second problem was the *implicit* fail of the `[]` operator when the asset was not found.

### Solution

The [`[]`](/docs/reference/expressions/asset#ak--asset_keya) operator does *not* fail anymore and now returns an [`option`](/docs/reference/types#option<T>) of [asset value](/docs/reference/types#asset_value<A>).

Combined with the new [`?= :`](/docs/reference/instructions/localvariable#-) declaration instruction, the proper way to retrieve all vehicle data presented above, is now as follows:

```archetype
const v ?= vehicle["1G1AF1F57A7192174"] : "VEHICLE_NOT_FOUND";
const m = v.manufacturer;
const y = v.year;
const n = v.nbdoors
```

### Single field access

Situations where a single asset field is accessed is very common though. In this case, version [`1.2.16`](https://github.com/edukera/archetype-lang/releases/tag/1.2.16) provides a new dedicated operator [`[]?.`](/docs/reference/expressions/asset#ak--asset_keyaf).

For example, the following retrieves an [`option`](/docs/reference/types#option<T>) of [`nat`](/docs/reference/types#nat) to treat more specifically the case when the asset is not found:
```archetype
const on = vehicle["1G1AF1F57A7192174"]?.nbdoors
```

`on` is typed `option<nat>` and is `none` if the vehicle is not found.



