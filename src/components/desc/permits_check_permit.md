import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry check_permit(signer : key, sig : signature, data : bytes) {
  called by consumer
  effect {
    const pkh = key_to_address(signer);
    const lcounter = permits[pkh] ? the.counter : 0;
    const to_sign : bytes = pack((self_address, lcounter, blake2b(pack(data))));
    do_require(check_signature(signer, sig, to_sign), (MISSIGNED, data));
    permits.add_update(pkh, { counter = (lcounter + 1)});
  }
}
```