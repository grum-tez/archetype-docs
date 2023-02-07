# APIs

import EagleEyeView from "@site/src/components/EagleEyeView.js";
import { Grid } from "@mui/material";
import { types, utils, fromMich, toMich, toMichType, experiment, exp_types } from "./index.js"

### `@completium/archetype-ts-types`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Types" data={types} xs={3}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Utils" data={utils} xs={4}/>
  </Grid>
   <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="To Micheline" data={toMich} xs={4}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="To Micheline Type" data={toMichType} xs={4}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="From Micheline" data={fromMich} xs={4}/>
  </Grid>
</Grid>

### `@completium/experiment-ts`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Types" data={exp_types} xs={3}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Functions" data={experiment} xs={4}/>
  </Grid>
</Grid>

