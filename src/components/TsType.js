import Divider from './Divider'
import { Grid, Typography } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import Info from './Info';
import NamedDivider from './NamedDivider';
import React from 'react';

const Method = (props) => {
  return <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
    <Grid item md={2} xs={12} sm={12}>
      <Typography><code>{props.data.label}</code></Typography>
    </Grid>
    <Grid item md={10} xs={12} sm={12}>
      {props.data.desc}
    </Grid>
    { !props.last ?
      <Grid item xs={12} style={{ marginBottom : '12px' }}>
        <Divider />
      </Grid> : <div /> }
  </Grid>
}

export default function Type(props) {
  return <StyledEngineProvider injectFirst>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginBottom: '60px' }}>
      <Grid item xs={12} style={{ marginBottom: '18px' }}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans'
        }}>
          {props.data.desc}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: '30px' }}>
        <Info fails={props.data.fails} />
      </Grid>
      <Grid item xs={12}>
        <NamedDivider title="Methods"/>
      </Grid>
      <Grid item container direction="row" justifyContent="flex-start">
        { props.data.methods.map((m, i) => {
          return <Method key={"m" + i} data={m} last={i >= props.data.methods.length - 1 }></Method>
        }) }
      </Grid>
    </Grid>
  </StyledEngineProvider>
}