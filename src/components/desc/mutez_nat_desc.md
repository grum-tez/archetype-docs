Converts a [`tez`](/docs/reference/types#tez) value in mutez (millionth of tez) to a [`nat`](/docs/reference/types#nat) value.

For example:
```archetype
const n = mutez_to_nat(5tz);
/* n is 5000000 */
```