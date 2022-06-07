---
sidebar_position: 1
---

# Introduction

## Fast track

Consider the following contract:
```archetype title="hello.arl"
archetype hello

variable msg : string = "Hello"

entry input(name : string) {
  msg += (length(msg) > 5 ? "," : "") + " " + name
}
```

Click on a language element to learn more:

[`archetype`](/docs/reference/declarations/contract) [`variable`](/docs/reference/declarations/storage#variable) [`string`](/docs/reference/types#string) [`entry`](/docs/reference/declarations/entrypoint) [`+=`](/docs/reference/instructions/assignment#a--b-1) [`length`](/docs/reference/expressions/builtins#length(o%20:%20T)) [`>`](/docs/reference/expressions/operators/arithmetic#a--b-11) [`? :`](/docs/reference/expressions/controls#a--b--c) [`+`](/docs/reference/expressions/operators/arithmetic#a--b)

Deploy contract with [Completium CLI](/docs/install#completium-cli):
```
completium-cli deploy hello.arl
```

Call contract's entrypoint `input` with argument `"Archetype"`:
```bash
completium-cli call hello --arg '{ "name": "Archetype" }'
```




