import NamedDivider from '@site/src/components/NamedDivider.js';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

When dealing with [FA 1.2](/docs/templates/fa12), the token_metadata map is initialized with the hex-encoded ipfs URI of the token metadata file (see [examples](/docs/templates/tokenmetadata#examples) below):
* `TOKEN_ID` is the the constant `0`
* `metadata_coin` is a contract [constant parameter](/docs/reference/declarations/contract#constant).

<NamedDivider title="Code" width="1.5"/>


<Tabs defaultValue="FA 1.2" >

<TabItem value="FA 1.2">

```archetype
constant TOKEN_ID : nat = 0

asset token_metadata to big_map {
  ftoken_metadata : nat;
  token_id        : nat;
  token_info      : map<string, bytes>;
} initialized with {
  {TOKEN_ID; TOKEN_ID; [("", metadata_coin)]}
}
```

</TabItem>

<TabItem value="FA 2">

```archetype
asset token_metadata to big_map {
  ftoken_metadata : nat;
  token_id        : nat;
  token_info      : map<string, bytes>;
}
```

</TabItem>
</Tabs>

[`asset`](/docs/asset) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`string`](/docs/reference/types#string) [`bytes`](/docs/reference/types#bytes)