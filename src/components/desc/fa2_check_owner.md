import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >

<TabItem value="NFT">

```archetype
function check_operator(txs : list<transfer_param>) : bool {
  var res = true;
  for tx in txs do
    const %from = tx.tp_from;
    const tds = tx.tp_txs;
    for td in tds do begin
      res &=
        if caller <> %from then
          (operator.contains((caller, td.token_id_dest, %from)) or
           operator_for_all.contains((caller, %from)))
        else
          ledger.contains(td.token_id_dest);
    end done
  done;
  return res
}
```
[`function`](/docs/reference/declarations/function) [`list`](/docs/reference/types#list<T>) [`bool`](/docs/reference/types#bool) [`var`](/docs/reference/instructions/localvariable#var) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`if`](/docs/reference/instructions/control#if) [`begin`](/docs/reference/instructions/sequence)  [`.`](/docs/reference/expressions/operators/access#ab-1) [`&=`](/docs/reference/instructions/assignment#a--b-4) [`or`](/docs/reference/expressions/operators/arithmetic#a-or-b) [`<>`](/docs/reference/expressions/operators/arithmetic#a--b-8) [`contains`](/docs/reference/expressions/asset#acontainsk--asset_keya) [`caller`](/docs/reference/expressions/constants#caller)

</TabItem>

<TabItem value="Fungible">

```archetype
function check_operator(txs : list<transfer_param>) : bool {
  var res = true;
  for tx in txs do
    const %from = tx.tp_from;
    const tds = tx.tp_txs;
    for td in tds do begin
      res &=
        if caller <> %from then
          (operator.contains((caller, td.token_id_dest, %from)) or
           operator_for_all.contains((caller, %from)))
        else
          ledger.contains(caller);
    end done
  done;
  return res
}
```
[`function`](/docs/reference/declarations/function) [`list`](/docs/reference/types#list<T>) [`bool`](/docs/reference/types#bool) [`var`](/docs/reference/instructions/localvariable#var) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`if`](/docs/reference/instructions/control#if) [`begin`](/docs/reference/instructions/sequence)  [`.`](/docs/reference/expressions/operators/access#ab-1) [`&=`](/docs/reference/instructions/assignment#a--b-4) [`or`](/docs/reference/expressions/operators/arithmetic#a-or-b) [`<>`](/docs/reference/expressions/operators/arithmetic#a--b-8) [`contains`](/docs/reference/expressions/asset#acontainsk--asset_keya) [`caller`](/docs/reference/expressions/constants#caller)


</TabItem>
</Tabs>