import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import styles from './component.module.css';
import { MichelsonType } from './MichelsonType';
import { Related } from './Related';

const Fails = (props) => {
    return ((props.fails === undefined || props.fails.length === 0) ? (
      <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', fontStyle: 'italic'}}>does not fail</Typography>
    ) : (
      <Grid container>
        { (props.fails.map((f,i) => {
          return (
            <Grid container style={{ marginBottom: (props.fails.length > 1 ? '22px' : '0px') }}>
            <Grid key={"fk"+i} item xs={(f.keyword.length > 15)? 12: 2} style={{ marginBottom: (f.keyword.length > 15)? '12px': '0px' }}>
              <Typography><code>{f.keyword}</code></Typography>
            </Grid>
            <Grid key={"fd"+i} item xs={10}>
              <Typography style={{
                fontFamily: 'IBM Plex Sans'
                }}>{f.desc}</Typography>
            </Grid>
            </Grid>
          )
        }))}
      </Grid>
    ))
  }

export default function Info(props) {
    return (
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginTop: '0px' }}>

      <Grid item xs={3} sm={2} md={2}>
        <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
          Fails with
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10} md={10}>
        <Fails fails={props.fails} />
      </Grid>
      {(props.michelson !== undefined) ? (
        <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
      ) : (<div />)}
      {(props.michelson !== undefined) ? (
        <Grid item xs={3} sm={2} md={2}>
          <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
            Michelson
          </Typography>
        </Grid>
      ) : (<div />)}
      {(props.michelson !== undefined) ? (
        <Grid item xs={9} sm={10} md={10}>
          <MichelsonType michelson={props.michelson} michelson_ref_url={props.michelson_ref_url} />
        </Grid>
      ) : (<div />)}
      {(props.related !== undefined) ? (
        <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
      ) : (<div />)}
      { (props.related !== undefined) ? (
        <Grid item xs={3} sm={2} md={2}>
          <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
            Related
          </Typography>
        </Grid>
      ) : (<div />) }
      { (props.related !== undefined) ? (
        <Grid item xs={9} sm={10} md={10}>
          <Grid container direction="row" spacing={3}>
            {props.related.map((r,i) => <Related key={'rel'+i} value={r.keyword} link={r.link}></Related>)}
          </Grid>
        </Grid>
      ) : (<div />)
      }
    </Grid>
    )
  }