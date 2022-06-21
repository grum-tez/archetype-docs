import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record balance_of_request {
  bo_owner : address;
  btoken_id : nat;
} as ((owner, token_id))

record balance_of_response {
  request : balance_of_request;
  balance_ : nat;
} as ((request, balance))
```

<Tabs defaultValue="NFT" >

<TabItem value="NFT">

```archetype
getter balance_of (requests : list<balance_of_request>) : list<balance_of_response> {
  return map(requests, br -> {
    request = br;
    balance_ = (ledger[br.btoken_id] ? (the.lowner = br.bo_owner ? 1 : 0) : 0)
  })
}
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`getter`](/docs/reference/declarations/entrypoint#getter) [`list`](/docs/reference/types#list<T>) [`map`](/docs/reference/expressions/builtins#map) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c)

</TabItem>

<TabItem value="Fungible">

```archetype
getter balance_of (requests : list<balance_of_request>) : list<balance_of_response> {
  return map(requests, br ->
    let b =
      if br.btoken_id <> TOKEN_ID then 0
      else (ledger[br.bo_owner] ? the.lamount : 0) in
    {
      request = br;
      balance_ = b
    })
}
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`getter`](/docs/reference/declarations/entrypoint#getter) [`list`](/docs/reference/types#list<T>) [`map`](/docs/reference/expressions/builtins#map) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c)

</TabItem>

<TabItem value="Multi asset">

```archetype
getter balance_of (requests : list<balance_of_request>) : list<balance_of_response> {
  return map(requests, br ->
    let b =
      if br.btoken_id <> TOKEN_ID then 0
      else (ledger[(br.bo_owner, br.btoken_id)] ? the.lamount : 0) in
    {
      request = br;
      balance_ = b
    })
}
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`getter`](/docs/reference/declarations/entrypoint#getter) [`list`](/docs/reference/types#list<T>) [`map`](/docs/reference/expressions/builtins#map) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c)

</TabItem>

</Tabs>