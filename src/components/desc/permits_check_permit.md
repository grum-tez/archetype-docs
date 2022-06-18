import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry check_permit(signer : key, sig : signature, data : bytes) {
  called by consumer
  constant {
    pkh      is key_to_address(signer);
    lcounter is permits[pkh] ? the.counter : 0;
    to_sign  is pack((self_address, lcounter, blake2b(pack(data))));
  }
  require {
    r2: check_signature(signer, sig, to_sign) otherwise (MISSIGNED, data)
  }
  effect {
    permits.add_update(pkh, { counter = (lcounter + 1)});
  }
}
```