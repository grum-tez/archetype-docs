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
        const towner ?= ledger[tokenid]?.lowner : FA2_TOKEN_UNDEFINED
        do_require(towner = %from, FA2_INSUFFICIENT_BALANCE);
        ledger.update(tokenid, { lowner = td.to_dest });
      end done
    done
  }
}
```