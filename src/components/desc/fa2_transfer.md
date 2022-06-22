import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry %transfer (txs : list<transfer_param>) {
  require { fa2_r4 : is_not_paused() }
  effect {
    if not check_operator(txs) then begin
      match get_from(txs) with
      | some(%from) ->
        transfer 0tz to permits
          call consume<address * bytes * string>((%from, pack(txs), FA2_NOT_OPERATOR))
      | none -> ()
      end
    end;

    transfer 0tz to entry self.do_transfer(txs);
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`if`](/docs/reference/instructions/control#if) [`match`](/docs/reference/instructions/control#match-with) [`transfer`](/docs/reference/instructions/operation#transfer) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes)  [`string`](/docs/reference/types#string) [`pack`](/docs/reference/expressions/builtins#pack(o%20:%20T))