import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function get_from_address(txs : list<transfer_arg>) : option<address> {
  match txs with
  | hd::tl -> begin
    const %from = hd.ta_from;
    for tx in tl do
      do_require(%from = tx.ta_from, FA2_NOT_OPERATOR)
    done;
    return some(%from)
  end
  | [] -> return none
  end
}
```