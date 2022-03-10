import React from 'react';
import { Grid, Typography } from '@mui/material';
import Link from '@docusaurus/Link';

export const Related = (props) => {
  return (
  <Grid item><Link to={props.link}><Typography style={{
    fontFamily: 'IBM Plex Sans'
  }}>{props.value}</Typography></Link></Grid>)
}