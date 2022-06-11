import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Link from '@docusaurus/Link';

import styles from './component.module.css';


export default function TemplateInfo(props) {
    return (
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginTop: '0px' }}>
        <Grid item xs={3} sm={2} md={2}>
          <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
            Repository
          </Typography>
        </Grid>
        <Grid item xs={9} sm={10} md={10}>
          <Link to={props.data.repo}>
            <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
            {props.data.repo}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
        <Grid item xs={3} sm={2} md={2}>
          <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
            Author
          </Typography>
        </Grid>
        <Grid item xs={9} sm={10} md={10}>
          <Link to={props.data.authorurl}>
            <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
            {props.data.author}
            </Typography>
          </Link>
        </Grid>
        { (props.data.tzip !== undefined) ? (
            <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
        ) : (<div></div>) }
        { (props.data.tzip !== undefined) ? (
            <Grid item xs={3} sm={2} md={2}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
              Norm
            </Typography>
            </Grid>
          ) : ( <div></div> )
        }
        {
          (props.data.tzip !== undefined) ? (
            <Grid item xs={9} sm={10} md={10}>
            <Link to={props.data.tzipurl}>
              <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
              {props.data.tzip}
              </Typography>
            </Link>
            </Grid>
          ) : ( <div></div> )
        }
      </Grid>
    )
  }