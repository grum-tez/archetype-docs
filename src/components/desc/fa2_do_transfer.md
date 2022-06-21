import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

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
        do_require(towner = %from, FA2_INSUFFICIENT_BALANCE);
        ledger.update(tokenid, { lowner = td.to_dest });
      end done
    done
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`self_address`](/docs/reference/expressions/constants#self_address) [`for`](/docs/reference/instructions/control#for) [`const`](/docs/reference/instructions/localvariable#const) [`.`](/docs/reference/expressions/operators/access#ab-1) [`?=`](/docs/reference/instructions/localvariable#) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`update`](/docs/reference/instructions/asset#aupdatek--u-)