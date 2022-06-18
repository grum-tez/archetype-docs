import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry consume_permit(signer : address, data: bytes, err: string) {
  called by consumer
  constant {
    permit_key     is blake2b(data);
    signer_expiry  is get_expiry(signer, permit_key);
    lpermit       ?is permits[signer]                  otherwise PERMIT_USER_NOT_FOUND;
    luser_permits ?is lpermit.user_permits[permit_key] otherwise err;
  }
  fail if {
    f1 : has_expired(luser_permits, signer_expiry) with PERMIT_EXPIRED
  }
  effect {
    permits[signer].user_permits.remove(permit_key)
  }
}
```