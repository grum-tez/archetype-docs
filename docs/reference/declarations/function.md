---
sidebar_position: 6
---

# Function

Entrypoints' effect may call functions. A function returns a value, may fail, but cannot change the contract storage.

A function is declared with the `function` keyword followed by a unique [identifier](/docs/reference/declarations/identifier), the returned [type](/docs/reference/types) and the function body. The function body cannot include assignment [instructions](/docs/reference#instructions) on storage elements, nor it can invoke the [`transfer`](/docs/reference/instructions/operation#transfer) instruction; it uses the `return` keyword to return a value.

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

The Michelson representation of a function is a [lambda](/docs/reference/types#lambda) expression put on the stack.
