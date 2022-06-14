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
        { (props.data.norms !== undefined) ? (
            <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
        ) : (<div></div>) }
        { (props.data.norms !== undefined) ? (
            <Grid item xs={3} sm={2} md={2}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
              {(props.data.norms.length > 1)? 'Norms': 'Norm'}
            </Typography>
            </Grid>
          ) : ( <div></div> )
        }
        {
          (props.data.norms !== undefined) ? (
            props.data.norms.map((norm) => {
              return (
                <Grid item xs={1}>
                  <Link to={norm.url}>
                    <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
                    {norm.label}
                    </Typography>
                  </Link>
              </Grid>)
            })

          ) : ( <div></div> )
        }
        { (props.data.templates !== undefined) ? (
            <Grid item xs={12}><Divider className={ styles.divider }/></Grid>
        ) : (<div></div>) }
        { (props.data.templates !== undefined) ? (
            <Grid item xs={3} sm={2} md={2}>
            <Typography style={{ fontFamily: 'IBM Plex Sans', color: 'grey', }}>
              {(props.data.templates.length > 1)? 'Templates': 'Template'}
            </Typography>
            </Grid>
          ) : ( <div></div> )
        }
        {
          (props.data.templates !== undefined) ? (
            props.data.templates.map((template) => {
              return (
                <Grid item xs={2}>
                  <Link to={template.url}>
                    <Typography style={{ fontFamily: 'IBM Plex Sans' }}>
                    {template.label}
                    </Typography>
                  </Link>
              </Grid>)
            })

          ) : ( <div></div> )
        }
      </Grid>
    )
  }