import React from 'react';
import { Divider } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';

import styles from './component.module.css';

export default function ThemedDivider() {
  return (
    <StyledEngineProvider injectFirst>
      <Divider className={ styles.divider }></Divider>
    </StyledEngineProvider>
  )
}