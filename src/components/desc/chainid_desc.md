import { Grid } from '@mui/material';
import ThemedDivider from '../Divider.js'

Chain unique identifier.

It is typically used in *signed* permits data to be *verified* on chain, in order to avoid replay attacks from testnet to mainnet (so that a permit from testnet cannot be used on mainnet).

The table below shows the chain id of the main networks:

<Grid container>
<Grid xs={12} sm={12} md={2.5}>
Mainnet
</Grid>
<Grid xs={12} sm={12} md={9.5}>

`"NetXdQprcVkpaWU"`

</Grid>

<Grid xs={12}>
<ThemedDivider />
</Grid>

<Grid xs={12} sm={12} md={2.5} style={{ marginTop: '18px' }}>
Testnet (Ithacanet)
</Grid>
<Grid xs={12} sm={12} md={9.5} style={{ marginTop: '18px' }}>

`"NetXnHfVqm9iesp"`

</Grid>
</Grid>

The chain id is provided by the tezos node at:
```
<node url>/chains/main/chain_id
```
