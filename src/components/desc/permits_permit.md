import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry permit(pk : key, sig : signature, data : bytes) {
  require { r4: is_not_paused() }
  effect {
    const user = key_to_address(pk);
    const empty : map<bytes, user_permit> = [];
    const up = permits[user] ? (the.counter, the.user_permits) : (0, empty);
    const pcounter      = up[0];
    const puser_permits = up[1];
    const to_sign = pack(((self_address, self_chain_id), (pcounter, data)));
    do_require(check_signature(pk, sig, to_sign), (MISSIGNED, to_sign));
    const e = get_default_expiry(user);
    permits.add_update(user, {
      counter += 1;
      user_permits = put(puser_permits, data, { expiry = some(e); created_at = now })
    });
    for (k, v) in permits[user].user_permits do
      if has_expired(v, e)
      then permits[user].user_permits.remove(k)
    done
  }
}
```