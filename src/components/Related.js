import Link from '@docusaurus/Link';
import { Grid, Typography } from '@mui/material';
import React from 'react';

export const Related = (props) => {
  console.log('code ' + props.code);
  console.log('test1 ' + (props.code != undefined))
  return (
  <Grid item><Link to={props.link}><Typography style={{
    fontFamily: 'IBM Plex Sans'
  }}>{(props.code != undefined && props.code === false) ? props.value :<code>{props.value}</code>}</Typography></Link></Grid>)
}