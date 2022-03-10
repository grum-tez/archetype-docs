
import React from 'react';
import { Grid, Button } from '@mui/material';
import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const MichelsonType = (props) => {
    return ((props.michelson_ref_url === undefined) ? (
      (Object.prototype.toString.call(props.michelson) !== '[object Array]') ? (
        <Button style={{
          textTransform: 'none',
          fontFamily: 'Roboto Mono',
          color: 'var(--ifm-color-primary)'
          }}
          disableFocusRipple
          size="small"
          disableRipple
        >{props.michelson}</Button>
      ) : (
        <Grid container spacing={1}>
          { props.michelson.map((m,i) => {
            return <Grid item key={'mt'+i}>
              <Button style={{
                textTransform: 'none',
                fontFamily: 'Roboto Mono',
                color: 'var(--ifm-color-primary)'
                }}
                disableFocusRipple
                size="small"
                disableRipple
              >{m}</Button>
            </Grid>
          }) }
        </Grid>
      )
    ) : (
        <Link to={props.michelson_ref_url}><Button style={{
          textTransform: 'none',
          fontFamily: 'Roboto Mono',
          color: 'var(--ifm-color-primary)'
          }}
          size="small"
          disableRipple
          endIcon={<OpenInNewIcon fontSize="small"/>}
        >{props.michelson}</Button></Link>
      )
    )
  }