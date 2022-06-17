import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry %transfer (txs : list<transfer_arg>) {
  require { r8 : is_not_paused() }
  effect {
    if not check_owner_and_operator(txs) then begin
      match get_from_address(txs) with
      | some(%from) -> begin
          var permit_key = blake2b(pack(txs));
          if not permits.contains(%from)
          then fail(NO_ENTRY_FOR_USER)
          else if not permits[%from].user_permits.contains(permit_key)
          then fail(FA2_NOT_OPERATOR)
          else (
            var iuser_permit = permits[%from].user_permits[permit_key];
            var iexpiry = get_expiry(%from, permit_key);
            if has_expired(iuser_permit, iexpiry)
            then fail(PERMIT_EXPIRED)
            else permits[%from].user_permits.remove(permit_key)
          );
          end
      | none -> ()
      end
    end;

    transfer 0tz to entry self.do_transfer(txs);
  }
}
```