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

const TypeExample = (props) => {
  return (
    <Grid item>
      <code>{props.value}</code>
    </Grid>
  )
}

const TranslateProperty = (v) => {
  switch(v) {
    case 0: return 'COMPARABLE'
    case 1: return 'PASSABLE'
    case 2: return 'STORABLE'
    case 3: return 'PACKABLE'
  }
}

const TypeProperty = (props) => {
  return (
    <Grid item>
      <code style={{
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '11px',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 0,
      }}>{ TranslateProperty(props.value) }</code>
    </Grid>
  )
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

      <Grid item xs={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          { (props.data.examples.length > 1) ? 'Examples' : 'Example' }
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="row" spacing={2}>
          {props.data.examples.map((p,i) => <TypeExample key={'te'+i} value={p} />)}
        </Grid>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          { (props.data.tags.length > 1) ? 'Properties' : 'Property' }
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="row" spacing={1}>
          {props.data.tags.map((p,i) => <TypeProperty key={'tp'+i} value={p} />)}
        </Grid>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Michelson
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Link to={props.data.michelson_ref_url}><Button style={{
          textTransform: 'none',
          fontFamily: 'Roboto Mono',
          color: 'var(--ifm-color-primary)'
          }}
          size="small"
          disableRipple
          endIcon={<OpenInNewIcon fontSize="small"/>}
        >{props.data.michelson}</Button></Link>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Related
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="row" spacing={3}>
          {props.data.related.map((r,i) => <Related key={'rel'+i} value={r.keyword} link={r.link}></Related>)}
        </Grid>
      </Grid>

    </Grid>
    </StyledEngineProvider>
  )
}