import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_expiry(iv : option<nat>, ip : option<bytes>) {
  require {
    r7: is_not_paused();
    r8: iv ? the < default_expiry : true otherwise EXPIRY_TOO_BIG;
  }
  effect {
    const caller_permit =? permits[caller] : (PERMIT_USER_NOT_FOUND, caller);
    match ip with
    | some(p) -> begin
        if (iv ? the > 0 : true) then begin
          const up : user_permit ?=
            caller_permit.user_permits[p] : (PERMIT_NOT_FOUND, (caller, p);
          permits[caller].user_permits.update(p, some({ up with expiry = v }))
        end else begin
          permits[caller].user_permits.remove(p)
        end
      end
    | none    -> permits.update(caller, { user_expiry = v })
    end
  }
}
```