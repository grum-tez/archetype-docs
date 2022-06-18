import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record transfer_arg {
  ta_from : address;
  ta_txs  : list<transfer_destination>;
} as ((%from_, %txs))

entry transfer_gasless (batch : list<list<transfer_arg> * (key * signature)>) {
  for b in batch do
    const txs = b[0];
    const pk  = b[1][0];
    const sig = b[1][1];
    transfer 0tz to permits
      call check_permits<key * signature * bytes>((pk, sig, pack(txs)));
    transfer 0tz to entry self.do_transfer(txs);
  done
}
```