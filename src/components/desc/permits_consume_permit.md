import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry consume(signer : address, data: bytes, err: string) {
  called by consumer
  constant {
   permit_key     is blake2b(data);
   signer_expiry  is get_expiry(signer, permit_key);
   lpermit       ?is permits[signer]                  otherwise USER_PERMIT_NOT_FOUND;
   luser_permits ?is lpermit.user_permits[permit_key] otherwise err;
  }
  require {
    p6: is_not_paused()
  }
  fail if {
    p7 : has_expired(luser_permits, signer_expiry) with PERMIT_EXPIRED
  }
  effect {
    permits[signer].user_permits.remove(permit_key)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes) [`string`](/docs/reference/types#string) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`constant`](/docs/reference/declarations/entrypoint#constant) [`blake2b`](/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`fail if`](/docs/reference/declarations/entrypoint#fail-if) [`remove`](/docs/reference/instructions/containers#mremovek)