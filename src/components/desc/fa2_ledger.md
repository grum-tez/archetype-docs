import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >

<TabItem value="NFT">

```archetype
asset ledger to big_map {
  ltokenid   : nat;
  lowner     : address;
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

</TabItem>

<TabItem value="Fungible">

```archetype
asset ledger to big_map {
  lowner     : address;
  lamount    : nat = 0;
} initialized by {
  {owner; INITIAL_TOTAL_SUPPLY}
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

</TabItem>

</Tabs>