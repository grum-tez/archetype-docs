Contract's metadata as specified by the [TZIP-16](https://tzip.tezosagora.org/proposal/tzip-16/) norm.

It is available only when the contract is declared with `with metadata` followed by the url of the metadata file.

For example:
```archetype
archetype my_contract with metadata ""
```

It is updated as any [map](/docs/language-basics/container#map) object:

```archetype
metadata.put(ikey, idata)
```