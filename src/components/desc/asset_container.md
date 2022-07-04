import { Grid } from '@mui/material';
import ThemedDivider from '@site/src/components/Divider.js'

Evaluates to the [basic container](/docs/language-basics/container) type of collection of asset `A`.

The following table presents examples of the correspondance betweed asset collection and container types:

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={6}>

```archetype
asset whitelist {
  user : address;
}
```

</Grid>

<Grid item xs={12} sm={12} md={6}>

`asset_container<whitelist>` is evaluated to:

`set<address>`

</Grid>
</Grid>

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={6}>

```archetype
asset data {
  owner : address;
  amount : nat
}
```

</Grid>

<Grid item xs={12} sm={12} md={6}>

`asset_container<data>` is evaluated to:

`map<address, nat>`

</Grid>
</Grid>

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={6}>

```archetype
asset data to big_map {
  owner : address;
  amount : nat
}
```

</Grid>

<Grid item xs={12} sm={12} md={6}>

`asset_container<data>` is evaluated to:

`big_map<address, nat>`

</Grid>
</Grid>

<Grid container spacing={2}>
<Grid item xs={12} sm={12} md={6}>

```archetype
asset whitelist to big_map {
  user : address;
}
```

</Grid>

<Grid item xs={12} sm={12} md={6}>

`asset_container<whitelist>` is evaluated to:

`big_map<address, unit>`

</Grid>
</Grid>