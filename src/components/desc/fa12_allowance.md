Associates an <i>owner</i> address and a <i>spender</i> address to an amount of tokens.

```archetype
asset allowance identified by addr_owner addr_spender to big_map {
  addr_owner       : address;
  addr_spender     : address;
  amount           : nat;
}
```