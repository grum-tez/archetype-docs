---
sidebar_position: 1
---

# Archetype contract

An archetype contract starts with the `archetype` keyword followed by a contract [identifier](/docs/reference/declarations/identifier).

For example:
```archetype
archetype escrow

/* ... */
```

:::warning
If generating contract [bindings](/docs/tests/framework#contract-binding) for test purposes, it is mandatory that the contract identifier be the same as the contract file name and that both are lower case. For example, the identifier for the contract file `auction.arl` should be `auction`.
:::

## Parameters

A contract may have parameters. A parameter value is not in the source code and is provided at deployment (origination) time. For example, the address of the contract owner is typically a contract parameter.

### Variable

By default, a contract parameter is an element of the contract storage. It is defined by an [identifier](/docs/reference/declarations/identifier) and a [type](/docs/reference/types). The list of parameters follows the contract's identifier between parenthesis and separated by comma.

For example:
```archetype
archetype escrow(seller : address, buyer : address)

/* ... */
```

The `seller` and `buyer` [addresses](/docs/reference/types#address) then need to be set at deployment time with the completium CLI's `deploy` command; for example:
```bash
completium-cli deploy escrow.arl --parameters '{ "seller" : "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb", "buyer" : "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6" }'
```

The value of a contract parameter may be modified by [assignment](/docs/reference/instructions/assignment) instructions in [entrypoints](/docs/reference/declarations/entrypoint).

### Constant

If a contract parameter is not meant to be modified, nor to appear in the storage, it may be declared `const`. Its value, provided at deployment time as for [variable](/docs/reference/declarations/contract#variable) parameter, is then *inlined*, that it replaces each occurence of the parmeter.

For example, the declaration of the [`FA 1.2`](/docs/reference/declarations/contract#variable) token contract:
```archetype
archetype fa1_2(const initial_holder : address, const total_supply : nat)
with metadata ""

/* ... */
```

## Metadata

The [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) specifies the standard contract's metadata as a storage [map](/docs/language-basics/container#map). It is declared with `with metadata` in contract declaration followed by intitial URL to metadata file:

```archetype
archetype my_token with metadata ""
```

This adds the [`metadata`](/docs/reference/expressions/variables#metadata) map to the storage.

A metadata template is provided [here](/docs/templates/metadata#example).
