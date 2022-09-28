import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry permit(signer : key, sig : signature, data : bytes) {
  constant {
    permit_key    is blake2b(data);
    user          is key_to_address(signer);
    usr_permit    is permits[user] ?
                      (the.counter, the.user_permits) :
                      (0, make_map<bytes, user_permit>([]));
    lcounter      is usr_permit[0];
    luser_permits is usr_permit[1];
    to_sign       is pack(((self_address, self_chain_id), (lcounter, data)));
    usr_expiry    is get_default_expiry(user);
  }
  require {
    p4: is_not_paused();
    p5: check_signature(signer, sig, to_sign) otherwise (MISSIGNED, to_sign)
  }
  effect {
    permits.add_update(user, {
      counter += 1;
      user_permits = put(luser_permits, permit_key, {
        expiry = some(usr_expiry);
        created_at = now
      })
    });
    for (k, v) in permits[user].user_permits do
      if has_expired(v, usr_expiry)
      then permits[user].user_permits.remove(k)
    done
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`key`](/docs/reference/types#key) [`signature`](/docs/reference/types#signature) [`bytes`](/docs/reference/types#bytes) [`constant`](/docs/reference/declarations/entrypoint#constant) [`key_to_address`](/docs/reference/expressions/builtins#key_to_address(k%20:%20key)) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c) [`make_map`](/docs/reference/expressions/builtins#make_map<K,%20V>(m)) [`[]`](/docs/reference/expressions/operators/access#ab) [`pack`](/docs/reference/expressions/builtins#pack(o%20:%20T)) [`self_address`](/docs/reference/expressions/constants#self_address) [`self_chain_id`](/docs/reference/expressions/constants#self_chain_id) [`require`](/docs/reference/declarations/entrypoint#require) [`check_signature`](/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) [`put`](/docs/reference/expressions/builtins#put(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20V)) [`some`](/docs/reference/expressions/builtins#some(v%20:%20T)) [`now`](/docs/reference/expressions/constants#now) [`for`](/docs/reference/instructions/control#for) [`if`](/docs/reference/instructions/control#if) [`remove`](/docs/reference/instructions/containers#mremovek)