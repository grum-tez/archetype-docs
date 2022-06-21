import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry set_expiry(iv : option<nat>, ip : option<bytes>) {
  require {
    p1: is_not_paused();
    p2: iv ? the < default_expiry : true otherwise EXPIRY_TOO_BIG;
  }
  effect {
    const caller_permit ?= permits[caller] : (USER_PERMIT_NOT_FOUND, caller);
    match ip with
    | some(p) -> begin
        if (iv ? the > 0 : true) then begin
          const up : user_permit ?=
            caller_permit.user_permits[p] : (PERMIT_NOT_FOUND, (caller, p));
          permits[caller].user_permits.update(p, some({ up with expiry = iv }))
        end else begin
          permits[caller].user_permits.remove(p)
        end
      end
    | none    -> permits.update(caller, { user_expiry = iv })
    end
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`const`](/docs/reference/instructions/localvariable#const) [`?=`](/docs/reference/instructions/localvariable#) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`match`](/docs/reference/instructions/control#match-with) [`begin`](/docs/reference/instructions/sequence) [`if`](/docs/reference/instructions/control#if) [`?:`](/docs/reference/expressions/controls#a--b--c) [`[]`](/docs/reference/expressions/operators/access#map) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)