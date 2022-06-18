import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry %transfer (txs : list<transfer_arg>) {
  require { r8 : is_not_paused() }
  effect {
    if not check_operator(txs) then begin
      match get_from_address(txs) with
      | some(%from) ->
        transfer 0tz to permits
          call consume_permits<address * bytes * string>((%from, pack(txs), FA2_NOT_OPERATOR))
      | none -> ()
      end
    end;

    transfer 0tz to entry self.do_transfer(txs);
  }
}
```