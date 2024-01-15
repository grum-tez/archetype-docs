---
sidebar_position: 6
---

# Function

Entrypoints' effect may call functions. A function returns a value, may fail, and can change the contract storage.

A function is declared with the `function` keyword followed by a unique [identifier](/docs/reference/declarations/identifier).
## `return`

A function may return a value; it then uses the `return` keyword. The return type is specified after the function arguments declaration, followed by `:`.

For example, the following function implements the Horner's formula of the exponential function:
```archetype
function exp(x : rational, steps : nat) : rational {
  var r : rational = 1 + x / steps;
  iter i to steps - 1 do
      r := 1 + x * r / (steps - i)
  done;
  return r
}
```

When the function does not change the storage, it is compiled as a [lambda](/docs/reference/types#lambda) expression on the stack. When the function *does* change the storage, it is inlined.

## Function as instruction

The return value, and the return type declaration, are optional. In that case, the function is considered as an instruction. For example, the function `set_res` below simply assigns a value to a storage variable:

```archetype
archetype example

variable res : nat = 0

function set_res(v : nat) {
  res := v
}

entry exec() {
  set_res(42)
}
```

Such functions are inlined, even if they do not change the contract's storage.


## Inlining strategy

A function that does not modify the storage nor emit operations is *inlined*. Any other function is compiled as a [lambda](/docs/reference/types/#lambda<T,%20R>) expression.

In [views](/docs/reference/declarations/view) a function is *always* inlined.