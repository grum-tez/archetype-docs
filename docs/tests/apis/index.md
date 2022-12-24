# APIs

import EagleEyeView from "@site/src/components/EagleEyeView.js";
import { Grid } from "@mui/material";
import { types, functions, experiment } from "./index.js"

### `@completium/archetype-ts-types`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Types" data={types} xs={3}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Type Utils" data={functions} xs={4}/>
  </Grid>
</Grid>

### `@completium/experiment-ts`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Functions" data={experiment} xs={4}/>
  </Grid>
</Grid>

