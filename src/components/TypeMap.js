import { Grid, Typography } from "@mui/material"
import Link from '@docusaurus/Link';
import Divider from './Divider'
import React from 'react';

const NotAvailable = () => {
  return <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>Not Available</Typography>
}

const tsprefix="/docs/tests/apis/types/#"
const archetypeprefix="/docs/reference/types/#"

export default function TypeMap(props) {
  return <Grid container>
    <Grid container item xs={12} style={{ marginBottom: '32px' }}>
      <Grid item md={4} xs={12} sm={12}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>Archetype</Typography>
      </Grid>
      <Grid item md={4} xs={12} sm={12}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>Michelson</Typography>
      </Grid>
      <Grid item md={4} xs={12} sm={12}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>Typescript</Typography>
      </Grid>
    </Grid>
    { props.data.map((m,i) => {
      return <>
        <Grid item md={4} xs={12} sm={12}>
          <Link to={archetypeprefix+m.link}><code>{m.archetype}</code></Link>
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          { m.michelson ? <code>{m.michelson}</code> : <NotAvailable /> }
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          { m.ts ? (m.native ? <code>{m.ts}</code> : <Link to={tsprefix + m.ts.toLowerCase()}><code>{m.ts}</code></Link>) : <NotAvailable /> }
        </Grid>
        { i < props.data.length - 1 ?
          <Grid item xs={12} style={{ marginBottom: '6px', marginTop: '6px' }}>
            <Divider />
          </Grid> : <div></div>
        }
      </>
    }) }
  </Grid>
}