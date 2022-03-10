import React from 'react';
import { Grid, Typography, Button, Divider } from '@mui/material';
import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './component.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

import { MichelsonType } from './MichelsonType';
import { Related } from './Related';

const TypeExample = (props) => {
  return (props.value.length < 100 ? (
    <Grid item>
      <code>{props.value}</code>
    </Grid>) : (
    <Grid item style={{ overflowX: 'scroll' }}>
      <pre>
        <code>{props.value}</code>
      </pre>
    </Grid>)
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

const Parameter = (props) => {
  return (
    <Grid container>
      <Grid item>
        <code style={{ marginRight: '4px' }}>{props.value.keyword}</code>
      </Grid>
      <Grid item xs={4}>
        <Typography style={{
          fontFamily: 'Roboto Mono',
          fontSize: '14px',
          color: 'grey',
          paddingTop: '4px'
        }}>
          ({props.value.type})
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans',
          paddingTop: '2px',
          marginBottom: props.last ? '4px' : '0px'
        }}>{props.value.desc}</Typography>
      </Grid>
      { (! props.last) ? (
        <Grid item xs={12} style={{
          marginTop: '10px',
          marginBottom: '10px'
        }}>
          <Divider className={ styles.divider }/>
        </Grid>
      ) : (<div/>)
      }

    </Grid>
  )
}

export default function Type(props) {
  return (
    <StyledEngineProvider injectFirst>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginBottom: '60px' }}>
      <Grid item xs={12} style={{ marginBottom: '18px' }}>
        <Typography style={{
          fontFamily: 'IBM Plex Sans'
        }}>
          {props.data.desc}
        </Typography>
      </Grid>

      { (props.data.parameters !== undefined) ? (
          <Grid item xs={3} sm={2} md={2}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
              { (props.data.parameters.length > 1) ? 'Parameters' : 'Parameter' }
            </Typography>
          </Grid>
        ) : (<div/>)
      }
      { (props.data.parameters !== undefined) ? (
          <Grid item xs={9} sm={10} md={10}>
            <Grid container direction="row">
              {props.data.parameters.map((p,i) => <Parameter key={'te'+i} last={i+1 === props.data.parameters.length} value={p} />)}
            </Grid>
          </Grid>
      ) : (<div/>)
      }
      { (props.data.parameters !== undefined) ? (
          <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
      ) : (<div/>) }

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          { (props.data.examples.length > 1) ? 'Examples' : 'Example' }
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Grid container direction="row" spacing={2}>
          {props.data.examples.map((p,i) => <TypeExample key={'te'+i} value={p} />)}
        </Grid>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          { (props.data.tags.length > 1) ? 'Properties' : 'Property' }
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Grid container direction="row" spacing={1}>
          {props.data.tags.map((p,i) => <TypeProperty key={'tp'+i} value={p} />)}
        </Grid>
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Michelson
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <MichelsonType michelson={props.data.michelson} michelson_ref_url={props.data.michelson_ref_url} />
      </Grid>
      <Grid item xs={12}><Divider className={ styles.divider }/></Grid>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Related
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Grid container direction="row" spacing={3}>
          {props.data.related.map((r,i) => <Related key={'rel'+i} value={r.keyword} link={r.link}></Related>)}
        </Grid>
      </Grid>

    </Grid>
    </StyledEngineProvider>
  )
}