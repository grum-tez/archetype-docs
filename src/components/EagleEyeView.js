import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Link from '@docusaurus/Link';
import { StyledEngineProvider } from '@mui/material/styles';

import styles from './component.module.css';

export default function EagleEyeView(props) {
  return (
    <StyledEngineProvider injectFirst>
    <Grid container style={{ marginBottom: '12px' }}>
      { (props.title !== undefined) ? (<Grid item xs={12}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          {props.title}
        </Typography>
      </Grid>) : (<div />) }
      { (props.title !== undefined) ? (
        <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '8px', marginTop: '4px' }}/></Grid>) : (<div />)
      }
      <Grid item xs={12}>
        <Grid container>
          { props.data.map((eevitem, i) => {
            return (<Grid key={'eevi'+i} item md={props.xs} xs={6} sm={6} style={{ marginBottom: '12px' }}>
              <Link to={eevitem.link}><code>{eevitem.label}</code></Link>
            </Grid>)
          }) }
        </Grid>
      </Grid>
    </Grid>
    </StyledEngineProvider>
  )
}