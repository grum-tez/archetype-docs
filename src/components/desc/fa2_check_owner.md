import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
function check_operator(txs : list<transfer_param>) : bool {
  var res = true;
  for tx in txs do
    const %from = tx.tp_from;
    const tds = tx.tp_txs;
    for td in tds do begin
      const tokenid = td.token_id_dest;
      res &=
        if caller <> %from then
          (operator.contains((caller, td.token_id_dest, %from)) or
           operator_for_all.contains((caller, %from)))
        else
          ledger.contains(tokenid);
    end done
  done;
  return res
}
```