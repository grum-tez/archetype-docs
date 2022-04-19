---
sidebar_position: 4
---

# Asset

import { instructions } from './reference/instructions.js';
import { expressions } from './reference/expressions/expressions.js'
import Api from '../src/components/Api.js';

Archetype *assets* provide a high-level abstraction to handle collection of structured data.

## Introduction

Similarly to a SQL table, an *asset* is a collection of data, stored in the contract storage, organized in rows and columns and defined by an identifier and a list of fields.

An *asset* collection provides a set of instructions ([add](/docs/reference/instructions#aadda), [update](/docs/reference/instructions#aupdatek--u-), [addupdate](/docs/reference/instructions#aaddupdatek--u-), [remove](/docs/reference/instructions#aremovek), [removeif](/docs/reference/instructions#aremoveifp), [clear](/docs/reference/instructions#aclear)) to manage the collection, and expressions ([contains](/docs/reference/expressions/asset#acontainsk--pkeya), [count](/docs/reference/expressions/asset#acount), [sum](/docs/reference/expressions/asset#asumf), [sort](/docs/reference/expressions/asset#asortf), ...) to interrogate the collection (see [API](/docs/asset#api) section below for more information).

For example, the following declaration defines a collection of loan data:
```archetype
asset loan identified by id {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  creation   : date     = now
  delay      : duration = 10w; /* 10 weeks */
}
```

The declaration above creates a collection of loans; each loan is defined by a string identifier `id` and five data fields (from `subscriber` to `delay`). Note that fields may have a default value.

Refer to the [declaration](/docs/reference/declarations#asset) section for more information.

## API

This section presents the application programming interface of an asset collection. Follow an item's link for a detailed presentation.

<Api title="Instructions" data={instructions.assets} />
<br/>
<Api title="Expressions" data={expressions.asset} />
<br/>

A convenient aspect of this API is the possibility to **combine** expressions and instructions. For example, consider the following `vehicle` asset definition:

```archetype
asset vehicle {
  vin          : string;
  nbrepairs    : nat  = 0;
  dateofrepair : date = now;
}
```

The following one line code removes the top 3 recently repaired vehicles with total number of 2 repairs:
```archetype
vehicle.sort(dateofrepair).select(the.nbrepairs = 2).head(3).clear();
```

## Michelson representation

The asset collection is compiled to Michelson as a [map](/docs/reference/types#map<K,%20V>) (or [big_map](/docs/reference/types#big_map<K,%20V>)) of records (right comb of pairs of annotated data).

An asset with only one field is compiled to a Michelson [set](/docs/reference/types#set<T>).

For example, the declaration above is quasi equivalent to the following lower-level code:

```archetype
record loan_data {
  subscriber : address;
  principal  : tez;
  interest   : rational;
  creation   : date;
  delay      : duration;
}

variable loan : map<string, loan> = []
```

## Iteration

An *asset* collection is iterable with the `for k in ... do ... done` loop instruction.

For example, the following code iterates on the *loan* collection:
```archetype
var total = 0tz;
for k in loan do /* k is a loan key */
  /* do something on asset with key k */
  total += loan[k].interest * loan[k].principal
done
```

Note that:
* assets are iterated in the natural key order.
* Note also that the above loop instruction is equivalent to the following expression:
```archetype
var total = loan.sum(interest * principal);
```
## Relations

It is possible to specify relations between assets of two collections with asset field types *partition* and *aggregate*.

### Partition

A partition defines a one-to-many relation between an asset B (*partitioning* asset) and an asset A (*partitioned* asset) so that an asset from collection *A* is in relation with **exactly one** asset from collection *B*; conversely an asset from collection *B* is in relation with zero, one or many assets from collection *A*.

The following declarations define asset *B* with a partition of *A*, typed [`partition<A>`](/docs/reference/types#p-q-r):
```archetype
asset A {
  ida : nat
}

asset B {
  idb  : nat;
  pofa : partition<A> /* field 'pofa' is a partition of A */
}
```

The *partition* relation is ensured **statically** by the compiler as it is not possible to add straightforwardly an asset to collection *A*. It is only possible through the parition field of an asset from collection B in order to ensure the relation is respected:
```archetype
B[kb].pofa.add({ ka });
```
See *partition* section of [`add`](/docs/reference/instructions#aadda) and [`remove`](/docs/reference/instructions#aremovek) instructions for more information.


### Aggregate

A partition defines a many-to-many relation between an asset B (*aggregating* asset) and an asset A (*aggregated* asset) so that an asset from collection *A* is in relation with zero, one or many assets from collection *B*; conversely an asset from collection *B* is in relation with zero, one or many assets from collection *A*.

The following declarations define asset *B* with an aggregate of *A*, typed [`aggregate<A>`](/docs/reference/types#aggregate<A>):
```archetype
asset A {
  ida : nat
}

asset B {
  idb  : nat;
  aofa : aggregate<A> /* field 'aofa' is an aggregate of A */
}
```

Adding a reference (ie. an identifier) in `aofa` field fails at runtime if the asset is not in collection *A*.

See *aggregate* section of [`add`](/docs/reference/instructions#aadda) and [`remove`](/docs/reference/instructions#aremovek) instructions for more information.