import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry check(signer : key, sig : signature, data : bytes) {
  called by consumer
  constant {
    user     is key_to_address(signer);
    lcounter is permits[user] ? the.counter : 0;
    to_sign  is pack(((self_address, self_chain_id), (lcounter, data)));
  }
  require {
    p8: is_not_paused();
    p9: check_signature(signer, sig, to_sign) otherwise (MISSIGNED, to_sign)
  }
  effect {
    permits.add_update(user, { counter = (lcounter + 1)});
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`key`](/docs/reference/types#key) [`signature`](/docs/reference/types#signature) [`bytes`](/docs/reference/types#bytes) [`called by`](/docs/reference/declarations/entrypoint#called-by)  [`constant`](/docs/reference/declarations/entrypoint#constant) [`key_to_address`](/docs/reference/expressions/builtins#key_to_address(k%20:%20key)) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c) [`pack`](/docs/reference/expressions/builtins#pack(o%20:%20T)) [`self_address`](/docs/reference/expressions/constants#self_address) [`blake2b`](/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)) [`require`](/docs/reference/declarations/entrypoint#require) [`check_signature`](/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-)


