Number of tez held by the contract.

It is indeed possible to send tez to a contract, either with a buitlin *tansfer* command (tezos-client, wallets, ...) or when calling an entrypoint.

:::danger
Note however that it is **not** possible to transfer the balance of a contract unless it is **explicitely** made possible by entrypoints.
:::

If a contract is receiving tez, it is recommended to add the following `collect` entrypoint:
```archetype
entry collect(collector : address) {
  called by owner
  effect {
    transfer balance to collector
  }
}
```