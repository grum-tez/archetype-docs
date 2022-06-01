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
const i = t[0];
const s = t[1];
const b = t[2];
```

#### Map

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
