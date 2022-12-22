# APIs

import EagleEyeView from "@site/src/components/EagleEyeView.js";
import { Grid } from "@mui/material";
import { types, functions } from "./index.js"

### `@completium/archetype-ts-types`

<Grid container>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Types" data={types} xs={2}/>
  </Grid>
  <Grid item md={12} xs={12} sm={12}>
    <EagleEyeView title="Type Utils" data={functions} xs={4}/>
  </Grid>
</Grid>

