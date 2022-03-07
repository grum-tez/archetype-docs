import React from 'react';
import { Grid, Typography, Button, Divider } from '@mui/material';
import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './component.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

const Parameter = (props) => {
  console.log(props)
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '12px' }}/></Grid>
        <Grid item xs={12}>
          <Typography>
            <code>{props.type}</code>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{
            fontFamily: 'IBM Plex Sans'
          }}>
            {props.desc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function Type(props) {
    return (
      <StyledEngineProvider injectFirst>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginBottom: '60px', maxWidth:'820px' }}>
        <Grid item xs={12} >
          <Typography style={{
            fontFamily: 'IBM Plex Sans',
            marginBottom: '12px'
          }}>
            {props.data.desc}
          </Typography>
        </Grid>
        {(props.data.parameters !== undefined) ? (
          <Grid item>
            <h4>Parameters</h4>
          </Grid>
          ) : (<div />)
        }
        {(props.data.parameters !== undefined) ? (
          props.data.parameters.map((p,i) => {
            return <Parameter key={"bp"+i} type={p.type} desc={p.desc}/>
          })
          ) : (<div />)
        }
        <Grid item style={{ marginTop: '12px' }}>
          <h4>Returns</h4>
        </Grid>
        <Parameter type={props.data.returns.type} desc={props.data.returns.desc} />
      </Grid>
      </StyledEngineProvider>
    )
}