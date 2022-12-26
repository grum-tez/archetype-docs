# APIs

import EagleEyeView from "@site/src/components/EagleEyeView.js";
import { Grid } from "@mui/material";
import { types, utils, fromMich, toMich, toMichType, experiment, dapp } from "./index.js"

### `@completium/archetype-ts-types`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Types" data={types} xs={3}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Utils" data={utils} xs={4}/>
  </Grid>
   <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="To Michelson" data={toMich} xs={4}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="To Michelson Type" data={toMichType} xs={4}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="From Michelson" data={toMichType} xs={4}/>
  </Grid>
</Grid>

### `@completium/experiment-ts`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Functions" data={experiment} xs={4}/>
  </Grid>
</Grid>

