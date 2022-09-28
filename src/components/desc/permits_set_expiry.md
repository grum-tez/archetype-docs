import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_expiry(iv : option<nat>, ip : option<bytes>) {
  constant {
    caller_permit ?is permits[caller] otherwise (USER_PERMIT_NOT_FOUND, caller);
  }
  require {
    r1: is_not_paused();
    r2: iv ? the < default_expiry : true otherwise EXPIRY_TOO_BIG;
  }
  effect {
    match ip with
    | some(p) -> begin
        const permit_key = blake2b(p);
        if (iv ? the > 0 : true) then begin
          const up : user_permit ?=
            caller_permit.user_permits[permit_key] : (PERMIT_NOT_FOUND, (caller, p));
          permits[caller].user_permits.update(permit_key, some({ up with expiry = iv }))
        end else begin
          permits[caller].user_permits.remove(permit_key)
        end
      end
    | none    -> permits.update(caller, { user_expiry = iv })
    end
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`const`](/docs/reference/instructions/localvariable#const) [`?=`](/docs/reference/instructions/localvariable#) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`match`](/docs/reference/instructions/control#match-with) [`begin`](/docs/reference/instructions/sequence) [`if`](/docs/reference/instructions/control#if) [`?:`](/docs/reference/expressions/controls#a--b--c) [`[]`](/docs/reference/expressions/operators/access#map) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)