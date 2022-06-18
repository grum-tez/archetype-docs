import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry permit(pk : key, sig : signature, data : bytes) {
  constant {
    user          is key_to_address(pk);
    user_permit   is permits[user] ?
                      (the.counter, the.user_permits) :
                      (0, make_map<bytes, user_permit>([]));
    pcounter      is user_permit[0];
    puser_permits is user_permit[1];
    to_sign       is pack(((self_address, self_chain_id), (pcounter, data)));
    user_expiry   is get_default_expiry(user);
  }
  require {
    r4: is_not_paused();
    r5: check_signature(pk, sig, to_sign) otherwise (MISSIGNED, to_sign)
  }
  effect {
    permits.add_update(user, {
      counter += 1;
      user_permits = put(puser_permits, data, {
        expiry = some(user_expiry);
        created_at = now
      })
    });
    for (k, v) in permits[user].user_permits do
      if has_expired(v, e)
      then permits[user].user_permits.remove(k)
    done
  }
}
```