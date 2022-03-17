import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';

import styles from './component.module.css';
import { MichelsonType } from './MichelsonType';
import { Related } from './Related';

const Types = (props) => {
  return (<Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
    <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '0px' }}/></Grid>
    <Grid item xs={4}>
      <Typography><Link to={'/docs/reference/types#'+props.typa}><code>{props.typa}</code></Link></Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography><Link to={'/docs/reference/types#'+props.typb}><code>{props.typb}</code></Link></Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography><Link to={'/docs/reference/types#'+props.typr}><code>{props.typr}</code></Link></Typography>
    </Grid>
  </Grid>)
}

export default function Operator(props) {
  return (
    <StyledEngineProvider injectFirst>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginBottom: '60px' }}>
      <Grid item xs={12}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans',
          marginBottom: '12px'
        }}>
          {props.data.desc}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Grid item xs={4}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', marginBottom: '12px'}}>Type of <code>a</code></Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', marginBottom: '12px'}}>Type of <code>b</code></Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', marginBottom: '12px'}}>Type of <code>a + b</code></Typography>
          </Grid>
          { props.data.types.map((t,i) => {
            return <Grid key={'typs'+i} item xs={12}>
                <Types typa={t.typa} typb={t.typb} typr={t.typr}/>
              </Grid>
          })}
          { (props.data.promotions !== undefined) ? (
            <Grid item xs={12}>
              <Typography style={{
                fontFamily: 'IBM Plex Sans', color: 'grey',
                marginTop: '6px', marginBottom: '6px', fontSize: '12px'
              }}>WITH TYPE PROMOTION</Typography>
            </Grid>
          ) : (<div />) }
          { (props.data.promotions !== undefined) ? (
            props.data.promotions.map((t,i) => {
              return <Grid key={'typs'+i} item xs={12}>
                <Types typa={t.typa} typb={t.typb} typr={t.typr}/>
              </Grid>
            })
          ) : (<div />) }
        </Grid>
      </Grid>
    </Grid>
    </StyledEngineProvider>)
}