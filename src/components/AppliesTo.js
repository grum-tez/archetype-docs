import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';

import styles from './component.module.css';
import Info from './Info';
import Builtin from './Builtin';

const appliestotypes = [
  { label : 'asset',            link : '/docs/asset' },
  { label : 'asset to big_map', link : '/docs/asset' },
  { label : 'asset to iterable_big_map', link : '/docs/asset' },
  { label : 'aggregate',        link : '/docs/reference/types#aggregate<A>' },
  { label : 'partition',        link : '/docs/reference/types#partition<A>' },
  { label : 'asset_view',             link : '/docs/reference/types#asset_view<A>' }
]

export default function AppliesTo(props) {
  return (<Grid item xs={12} style={{ marginTop: '12px' }}><Grid container>
    <Grid item>
      <h4 style={{ marginBottom: '0px', color: 'grey', fontWeight: 'normal', marginBottom: '12px' }}>Type of collection <code>A</code></h4>
    </Grid>
    <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '12px' }}></Divider></Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        { appliestotypes.map((t,i) => {
          return (<Grid item>
            <Link to={t.link} ><code style={{ textDecoration: props.data.includes(t.label)?"none":"line-through"}}>{t.label}</code></Link>
          </Grid>)
          })
        }
      </Grid>
    </Grid>

  </Grid></Grid>)
}
