import Link from '@docusaurus/Link';
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import styles from './component.module.css';

export default function DappInfo(props) {
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginTop: '0px' }}>
      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          DApp URL
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Link to={props.data.url}>
          <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
          {props.data.url}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Smart Contract
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Link to={props.data.contract_url}>
          <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
          {props.data.contract}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Repository
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Link to={props.data.repo}>
          <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
          {props.data.repo}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}