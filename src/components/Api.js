import React from 'react';
import Link from '@docusaurus/Link';

import { Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';


import styles from './component.module.css';

const ApiItem = (props) => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Divider className={ styles.divider } style={{ marginBottom: '8px', marginTop: '4px' }}></Divider>
      </Grid>
      <Grid item xs={12} sm={props.xs} md={props.xs} style={{ paddingLeft: '8px' }}>
        { props.data.link == undefined ? (<code>{props.data.label}</code>) : (<Link to={props.data.link}><code>{props.data.label}</code></Link>) }
      </Grid>
      <Grid item xs={12} sm={12-props.xs} md={12-props.xs} style={{  paddingLeft: '8px', marginBottom: '8px' }}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans',
        }}>{props.data.desc}</Typography>
      </Grid>
    </Grid>
  )
}

export default function Api(props) {
  const xs = (props.xs == undefined) ? 3 : props.xs;
  return (
    <StyledEngineProvider injectFirst>
    <Grid container>
      <Grid item style={{ paddingLeft: '8px' }}>
      <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          {props.title}
        </Typography>
      </Grid>
      { props.data.map((e => {
        return (<ApiItem data={e} xs={xs}/>)
       })) }
    </Grid>
    </StyledEngineProvider>
  )
}