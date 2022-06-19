import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry transfer_gasless (batch : list<list<transfer_param> * (key * signature)>) {
  for b in batch do
    const txs = b[0];
    const pk  = b[1][0];
    const sig = b[1][1];
    transfer 0tz to permits call check<key * signature * bytes>((pk, sig, pack(txs)));
    transfer 0tz to entry self.do_transfer(txs);
  done
}
```