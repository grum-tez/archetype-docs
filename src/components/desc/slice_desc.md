Extracts a section of a string or bytes `s` and returns it as a new string or bytes.

The section starts at offset postion `o` is has a length of `l`.

For example:
```archetype
const s = "Hello Archetype World!";
const e = slice(s, 6, 9);  /* e is "Archetype" */
const b = 0x48656c6c6f2041726368657479706520576f726c64;
const c = slice(b, 12, 18); /* c is 0x417263686574797065 */
```