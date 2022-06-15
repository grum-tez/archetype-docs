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

## Parameters

A contract may have parameters. A contract parameter is a storage element whose value is set at deployment (origination) time. It is defined by an [identifier](/docs/reference/declarations/identifier) and a [type](/docs/reference/types). The list of parameters follows the contract's identifier between parenthesis and separated by comma.

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

## Metadata

The [TZIP-16](`https://tzip.tezosagora.org/proposal/tzip-16/`) specifies the standard contract's metadata as a storage [map](/docs/language-basics/container#map). It is declared with `with metadata` in contract declaration followed by intitial URL to metadata file:

```archetype
archetype my_token with metadata ""
```

This adds the [`metadata`](/docs/reference/expressions/variables#metadata) map to the storage.