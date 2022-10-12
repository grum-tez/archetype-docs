import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record gasless_param {
  transfer_params : list<transfer_param>;
  user_pk         : key;
  user_sig        : signature
}

function check_owner(addr : address, txs : list<transfer_param>) : bool {
  var res = true;
  for tx in txs do
    res &= addr = tx.tp_from
  done;
  return res
}

entry transfer_gasless (batch : list<gasless_param>) {
  require { fa2_r3 : is_not_paused() }
  effect {
    for b in batch do
      const txs = b.transfer_params;
      const pk  = b.user_pk;
      const sig = b.user_sig;
      const pkh_signer = key_to_address(pk);
      do_require(check_owner(pkh_signer, txs), SIGNER_NOT_FROM);
      transfer 0tz to permits
        call check<key * signature * bytes>((pk, sig, pack(txs)));
      transfer 0tz to entry self.do_transfer(txs);
    done
  }
}
```
[`record`](/docs/language-basics/composite#record) [`list`](/docs/reference/types#list<T>) [`key`](/docs/reference/types#key) [`signature`](/docs/reference/types#signature) [`entry`](/docs/reference/declarations/entrypoint#entry) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`transfer`](/docs/reference/instructions/operation#transfer)