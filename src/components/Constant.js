import React from 'react';
import { Grid, Typography, Button, Divider } from '@mui/material';
import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './component.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

const Related = (props) => {
  return (
  <Grid item><Link to={props.link}><Typography style={{
    fontFamily: 'IBM Plex Sans'
  }}>{props.value}</Typography></Link></Grid>)
}

export default function Type(props) {
  return (
    <StyledEngineProvider injectFirst>
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1} style={{ marginBottom: '60px', maxWidth:'820px' }}>
      <Grid item xs={12} style={{ marginBottom: '18px' }}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans'
        }}>
          {props.data.desc}
        </Typography>
      </Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Type
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <code>{props.data.type}</code>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Michelson
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Link to={props.data.michelson_ref_url}><Button style={{
          fontFamily: 'Roboto Mono',
          color: 'var(--ifm-color-primary)'
          }}
          size="small"
          disableRipple
          endIcon={<OpenInNewIcon fontSize="small"/>}
        >{props.data.michelson}</Button></Link>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Related
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Related value={props.data.type} link={'/docs/reference/types#'+props.data.type} />
          </Grid>
          {props.data.related.map((r,i) => <Related key={'rel'+i} value={r.keyword} link={r.link}></Related>)}
        </Grid>
      </Grid>

    </Grid>
    </StyledEngineProvider>
  )
}