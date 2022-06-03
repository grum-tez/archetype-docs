Adds a new asset `a` in collection `A`, or replaces by asset `a` the asset in collection `A` with same key.

For example, given the following asset declaration with 5 fields:

```archetype
asset loan {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  time       : duration = 10w; /* 10 weeks */
}
```

The following instruction adds or replaces asset `"1a3245"`:

```archetype
loan.put({
  id         = "1a3245";
  subscriber = tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
  interest   = 5%;
  time       = 50w;
})
```

As for the [`add`](/docs/reference/instructions/asset#aadda) instruction, fields label may be omitted when all fields are specified:

```archetype
loan.put({ "1a3245"; tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg; 5%; 50w5d })
```

Fields with default values (like interest and time) may be omitted in asset literal; other fields labels must then be present:

```archetype
loan.put({
  id         = "1a3245";
  subscriber = tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
})  /* interest and time are defaulted to 2% and 10 weeks respectively */
```