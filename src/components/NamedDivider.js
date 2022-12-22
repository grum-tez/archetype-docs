import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import styles from './component.module.css';

export default function NamedDivider(props) {
  const w = props.width !== undefined ? props.width : 12;
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginTop: '0px', marginBottom: '24px' }}>
      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
      </Grid>
      <Grid item xs={12} sm={w} md={w}>
        <Divider className={ styles.divider }/>
      </Grid>
    </Grid>
  )
}