[Horner's method](https://en.wikipedia.org/wiki/Horner%27s_method) applied to (the polynomial development of) the exponential function.

It is equivalent to the following archetype code:

```archetype
function exp_horner(x : rational, precision : nat) : rational {
  var r : rational = 1 + x / precision;
  iter i to precision - 1 do
      r := 1 + x * r / (precision - i)
  done;
  return r
}
```