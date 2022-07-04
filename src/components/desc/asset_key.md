import { Grid } from '@mui/material';
import ThemedDivider from '@site/src/components/Divider.js'

Evaluates to the asset identifer type of collection `A`.

The following table presents examples of key type evaluation:

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={7}>

```archetype
asset whitelist {
  user : address;
}
```

</Grid>

<Grid item xs={12} sm={12} md={5}>

`asset_key<whitelist>` is evaluated to:

`address`

</Grid>
</Grid>

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={7}>

```archetype
asset data {
  owner : address;
  amount : nat
}
```

</Grid>

<Grid item xs={12} sm={12} md={5}>

`asset_key<data>` is evaluated to:

`address`

</Grid>
</Grid>

<Grid container spacing={2} direction="row"
  justifyContent="center"
  alignItems="center">
<Grid item xs={12} sm={12} md={7}>

```archetype
asset ledger identified by owner tokenid {
  owner     : address;
  tokenid   : nat;
  amount    : nat = 0;
}
```

</Grid>

<Grid item xs={12} sm={12} md={5}>

`asset_key<ledger>` is evaluated to:

```archetype
record ledger_key {
  owner     : address;
  tokenid   : nat;
}
```

</Grid>
</Grid>
