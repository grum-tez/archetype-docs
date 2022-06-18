import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry consume_permit(signer : address, data: bytes, err: string) {
  called by consumer
  effect {
    const permit_key = blake2b(data);
    const e = get_expiry(signer, permit_key);
    const lpermit ?= permits[signer] : PERMIT_USER_NOT_FOUND;
    const luser_permits ?= lpermit.user_permits[permit_key] : err;
    do_require(not has_expired(luser_permits, e), PERMIT_EXPIRED);
    permits[signer].user_permits.remove(permit_key)
  }
}
```