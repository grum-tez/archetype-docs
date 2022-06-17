import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record transfer_arg {
  ta_from : address;
  ta_txs  : list<transfer_destination>;
} as ((%from_, %txs))

entry transfer_gasless (batch : list<list<transfer_arg> * (key * signature)>) {
  for b in batch do
    const pk  = b[1][0];
    const sig = b[1][1];
    const pkh = key_address(pk);

    const lcounter = permits[pkh] ? the.counter : 0;
    const data : bytes = pack((selfaddress, lcounter, blake2b(pack(b[0]))));
    if not check_signature(pk, sig, data) then fail((MISSIGNED, data));
    permits.add_update(pkh, { counter = (lcounter + 1)});

    transfer 0tz to entry self.do_transfer(b[0]);
  done
}
```