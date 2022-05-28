# Reference

import EagleEyeView from "@site/src/components/EagleEyeView.js";
import { declarations } from "./declarations.js";
import { instructions } from "./instructions.js";
import { types } from "./types.js";
import { constants } from "./expressions/constants.js";
import { operators } from "./expressions/operators.js";
import { builtins, to_link } from "./expressions/builtins.js";
import { expressions } from "./expressions/expressions.js";
import { Grid } from "@mui/material";

This is the Archetype language reference.

## Declarations

<Grid container>
  <Grid item md={4} xs={12} sm={12}>
    <EagleEyeView title="Storage" data={declarations.storage} xs={4}/>
  </Grid>
  <Grid item md={8} xs={12} sm={12}>
    <EagleEyeView title="Composite types" data={declarations.types} xs={3}/>
  </Grid>
  <Grid item md={4} xs={12} sm={12}>
    <EagleEyeView title="Inlined" data={declarations.inlined} xs={4}/>
  </Grid>
  <Grid item md={8} xs={12} sm={12}>
    <EagleEyeView title="Entrypoints" data={declarations.entrypoints} xs={3}/>
  </Grid>
</Grid>

<EagleEyeView title="Sections" data={declarations.sections} xs={4}/>

<Grid container>
  <Grid item md={4} xs={12} sm={12}>
    <EagleEyeView title="Functions" data={declarations.functions} xs={4}/>
  </Grid>
  <Grid item md={8} xs={12} sm={12}>
    <EagleEyeView title="Views" data={declarations.views} xs={3}/>
  </Grid>
</Grid>

## Types

<EagleEyeView data={Object.entries(types).map(([k,v]) => {
    return { label: k, link: '/docs/reference/types' + types[k].link }
  })
} xs={4}/>

## Instructions

<Grid container>
  <Grid item md={4} xs={12} sm={12}>
    <EagleEyeView title="Sequence" data={instructions.sequence} xs={6}/>
  </Grid>
  <Grid item md={8} xs={12} sm={12}>
    <EagleEyeView title="Local variable" data={instructions.localvar} xs={6}/>
  </Grid>
</Grid>

<EagleEyeView title="Assignement" data={instructions.assignements} xs={1}/>

<EagleEyeView title="Control" data={instructions.controls} xs={2}/>

<EagleEyeView title="Divergent" data={instructions.divergent} xs={2}/>

<Grid container>
  <Grid item md={4} xs={12} sm={12}>
    <EagleEyeView title="Set" data={instructions.sets} xs={6}/>
  </Grid>
  <Grid item md={8} xs={12} sm={12}>
    <EagleEyeView title="List" data={instructions.lists} xs={3}/>
  </Grid>
</Grid>

<EagleEyeView title="Map" data={instructions.maps} xs={2}/>

<EagleEyeView title="Asset" data={instructions.assets} xs={2}/>

<EagleEyeView title="Operation" data={instructions.blockchain} xs={4}/>

## Expressions

<EagleEyeView title="Constants" data={Object.entries(constants).map(([k,v]) => {
    return { label: k, link: '/docs/reference/expressions/constants#' + k }
  })
} xs={4}/>

<EagleEyeView title="Operators" data={Object.entries(operators).map(([k,v]) => {
    return { label: operators[k].label, link: '/docs/reference/expressions/operators#' + operators[k].link }
  })
} xs={4}/>

<EagleEyeView title="Builtins" data={Object.entries(builtins).sort().map(([k,v]) => {
    return { label: k, link: '/docs/reference/expressions/builtins#' + to_link(v.sig) }
  })
} xs={4}/>

<EagleEyeView title="Control" data={expressions.controls} xs={4}/>

<EagleEyeView title="Declaration" data={expressions.declaration} xs={4} />

<EagleEyeView title="Asset" data={expressions.asset} xs={4}/>