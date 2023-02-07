# Introduction

Archetype is an elegant generic-purpose language to develop Smart Contracts on the [Tezos](https://tezos.com/) blockchain.

⚡️ It supports all [Michelson](https://tezos.gitlab.io/michelson-reference/) features, but also provides exclusive *high-level features* for a precise and concise source code, that make contracts easier to develop, read and maintain.

## Documentation

The core of this documentation is the language [Reference](/docs/reference/) organised in four parts (Declarations, [Types](/docs/reference/types), Instructions and Expressions), on top of which are thematic articles (Language Basics, [Asset](/docs/asset), [State Machine](/docs/statemachine)).

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

Deploy contract with [Completium CLI](/docs/installation#completium-cli):
```
completium-cli deploy hello.arl
```

Call contract's entrypoint `input` with argument `"Archetype"`:
```bash
completium-cli call hello --entry input --arg '{ "name": "Archetype" }'
```




