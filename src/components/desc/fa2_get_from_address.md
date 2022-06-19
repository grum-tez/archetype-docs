import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function get_from(txs : list<transfer_param>) : option<address> {
  match txs with
  | hd::tl -> begin
    const %from = hd.tp_from;
    for tx in tl do
      do_require(%from = tx.tp_from, FA2_NOT_OPERATOR)
    done;
    return some(%from)
  end
  | [] -> return none
  end
}
```