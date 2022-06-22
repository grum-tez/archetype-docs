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
[`function`](/docs/reference/declarations/function) [`list`](/docs/reference/types#list<T>) [`option`](/docs/reference/types#option<T>) [`match`](/docs/reference/instructions/control#match-with) [`begin`](/docs/reference/instructions/sequence) [`const`](/docs/reference/instructions/localvariable#const) [`.`](/docs/reference/expressions/operators/access#ab-1) [`for`](/docs/reference/instructions/control#for) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7)