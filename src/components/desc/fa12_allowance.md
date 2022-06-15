import NamedDivider from '@site/src/components/NamedDivider.js';

Associates an <i>owner</i> address and a <i>spender</i> address to an amount of tokens.

<NamedDivider title="Code" width="1.5"/>

```archetype
asset allowance identified by addr_owner addr_spender to big_map {
  addr_owner       : address;
  addr_spender     : address;
  amount           : nat;
}
```