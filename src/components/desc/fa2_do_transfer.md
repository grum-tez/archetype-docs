import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >

<TabItem value="NFT">

```archetype
entry do_transfer(txs : list<transfer_param>) {
  called by self_address
  effect {
    for tx in txs do
      const %from = tx.tp_from;
      const tds   = tx.tp_txs;
      for td in tds do begin
        const tokenid = td.token_id_dest;
        const towner ?= ledger[tokenid]?.lowner : FA2_TOKEN_UNDEFINED;
        do_require(towner = %from and td.token_amount_dest = 1,
          FA2_INSUFFICIENT_BALANCE);
        ledger.update(tokenid, { lowner = td.to_dest });
      end done
    done
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`self_address`](/docs/reference/expressions/constants#self_address) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`.`](/docs/reference/expressions/operators/access#ab-1) [`?=`](/docs/reference/instructions/localvariable#) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`update`](/docs/reference/instructions/asset#aupdatek--u-)

</TabItem>

<TabItem value="Fungible">

```archetype
entry do_transfer(txs : list<transfer_param>) {
  called by self_address
  effect {
    for tx in txs do
      const %from = tx.tp_from;
      const tds   = tx.tp_txs;
      for td in tds do begin
        do_require(td.token_id_dest = TOKEN_ID, FA2_TOKEN_UNDEFINED);
        const amount = ledger[%from]?.lamount ? the : 0;
        const new_amount ?=
            int_to_nat(amount - td.token_amount_dest) : FA2_INSUFFICIENT_BALANCE;
        if new_amount = 0 then
          ledger.remove(%from)
        else begin
          ledger.update(%from, { lamount := new_amount });
        end;
        ledger.add_update(td.to_dest, { lamount += td.token_amount_dest })
      end done
    done
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`self_address`](/docs/reference/expressions/constants#self_address) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`.`](/docs/reference/expressions/operators/access#ab-1) [`?=`](/docs/reference/instructions/localvariable#) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`<>`](/docs/reference/expressions/operators/arithmetic#a--b-8) [`begin`](/docs/reference/instructions/sequence) [`into_to_nat`](/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)


</TabItem>

<TabItem value="Multi asset">

```archetype
entry do_transfer(txs : list<transfer_param>) {
  called by self_address
  effect {
    for tx in txs do
      const %from = tx.tp_from;
      const tds   = tx.tp_txs;
      for td in tds do begin
        const tid = td.token_id_dest;
        const amount = ledger[(%from, tid)]?.lamount ? the : 0;
        const new_amount ?=
            int_to_nat(amount - td.token_amount_dest) : FA2_INSUFFICIENT_BALANCE;
        if new_amount = 0 then
          ledger.remove((%from, tid))
        else begin
          ledger.update((%from, tid), { lamount := new_amount });
        end;
        ledger.add_update((td.to_dest, tid), { lamount += td.token_amount_dest })
      end done
    done
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`self_address`](/docs/reference/expressions/constants#self_address) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`.`](/docs/reference/expressions/operators/access#ab-1) [`?=`](/docs/reference/instructions/localvariable#) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`<>`](/docs/reference/expressions/operators/arithmetic#a--b-8) [`begin`](/docs/reference/instructions/sequence) [`into_to_nat`](/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)


</TabItem>

</Tabs>