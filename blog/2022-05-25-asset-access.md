---
slug: asset-access
title: Accessing assets
authors: [gd]
tags: [asset, new feature]
---

We present an improvement in the way [assets](/docs/asset) data are accessed in version [`1.3.0`](/docs/install).

### Problems

Until this version, the only way to access an asset data was the field accessor operator of the form [`A[k].f`](/docs/reference/expressions/asset#ak--asset_keyaf), where `A` is the asset collection, `k` the asset key and `f` the asset field.

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

Accessing several fields would end up accessing the underlying map several times:

```archetype
const k = "1G1AF1F57A7192174";
const m = vehicle[k].manufacturer;
const y = vehicle[k].year;
const n = vehicle[k].nbdoors
```

Here the test and fail instructions are repeated three times.

The second problem is the *implicit* fail of the `[]` operator in situations where it is implicit that the asset exists.

It is typically the case when the asset field is accessed in the `true` branch of a [`contains`](/docs/reference/expressions/asset#acontainsk--asset_keya) test:

```archetype
const k = "1G1AF1F57A7192174";
if vehicle.contains(k) then begin
  const m = vehicle[k].manufacturer;
  /* ... do something with m ... */
end
```

The `[].` operator treats the case when asset is not found while it has already been tested.

### Solution

Version [`1.3.0`](/docs/install) provides new operator [`[]`](/docs/reference/expressions/asset#ak--asset_keya) that returns an [`option`](/docs/reference/types#option<T>) of [asset value](/docs/reference/types#asset_value<A>).

Combined with the new [`?=`](/docs/reference/instructions/localvariable#-) declaration instruction, the proper way to retrieve all vehicle data presented above, is now as follows:

```archetype
const v ?= vehicle["1G1AF1F57A7192174"];
const m = v.manufacturer;
const y = v.year;
const n = v.nbdoors
```

The declaration of `v` fails with `"OPTION_IS_NONE"` if vehicle is not found. It is possible to specify an error message with:
```archetype
const v ?= vehicle["1G1AF1F57A7192174"] : "VEHICLE_NOT_FOUND"
```

### Single field access

Situations where a single asset field is accessed is very common though.

Version [`1.3.0`](/docs/install) provides a new operator [`[]?.`](/docs/reference/expressions/asset#ak--asset_keyaf) that returns an [`option`](/docs/reference/types#option<T>) of field value, so that the non existence case may be *explicitely* treated.

For example, the following retrieves an option of [`nat`](/docs/reference/types#nat) to treat more specifically the case when the asset is not found:
```archetype
const opt_n = vehicle["1G1AF1F57A7192174"]?.nbdoors;
/* treat case when on is none ... */
```

`opt_n` is typed `option<nat>` and is `none` if the vehicle is not found.

Operator [`[].`](/docs/reference/expressions/asset#ak--asset_keyaf) is still available: it fails when asset is not found, which is syntactically convenient when there is an *implicit* existence invariant on the asset:
```archetype
const n = vehicle["1G1AF1F57A7192174"].nbdoors;
```

It implictely fails with `("ASSET_NOT_FOUND", "vehicle")` if `"1G1AF1F57A7192174"` is not found.


