import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record transfer_destination {
  to_dest           : address;
  token_id_dest     : nat;
  token_amount_dest : nat
} as ((%to_, (token_id, amount)))

record transfer_param {
  tp_from : address;
  tp_txs  : list<transfer_destination>;
} as ((%from_, %txs))
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`list`](/docs/reference/types#list<T>)