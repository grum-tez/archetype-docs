Builds a value from Michelson instructions.

For example, the following michelson instructions return the sha3 value of the packed concatenation of `a` and `b`:

```archetype
archetype michelson_expression

variable res : bytes = 0x

entry exec () {
  const a = "Hello ";
  const b = "Archetype!";
  res := michelson<bytes> { CONCAT; PACK; SHA3 } [a : b]
}
```