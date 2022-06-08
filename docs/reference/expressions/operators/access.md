---
sidebar_position: 0
---

# Access

### `a[b]`
#### Tuple

Accesses dimension `b` of [tuple](/docs/language-basics/composite#tuple) `a`; `b` is a *literal* integer value in the range `0` to tuple's dimensionality minus 1.

For example:
```archetype
const t = (1, "a string", 0xbc); /* t's dimensionality is 3 */
const i = t[0]; /* 1          */
const s = t[1]; /* "a string" */
const b = t[2]; /* 0xbc       */
```

#### Map

Accesses value associated with key `b` in [map](/docs/language-basics/container#map) `a` (also [`big_map`](/docs/reference/types#big_map<K,%20V>) and [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>)).

It returns an [`option`](/docs/reference/types#option<T>) of the associated value, which is `none` if the key is not found.

For example:
```archetype
const m : map<nat, string> = [ (1, "a string"); (3, "another") ];
const s1 ?= m[1] : "1_NOT_FOUND"; /* "a string"    */
const s2 ?= m[3] : "3_NOT_FOUND"; /* "another"     */
```
### `a.b`

Accesses field `b` of [record](/docs/language-basics/composite#record) `a`.

For example, consider the following declaration:
```archetype
record person {
  first_name : string;
  last_name  : string;
}
```

Then fields are accessed the following way:
```archetype
const p = {
  first_name = "Albert";
  last_name  = "Michelson"
};
const hello = "Hello " + p.first_name + " " + p.last_name + "!";
/* hello is "Hello Albert Michelson!" */
```
