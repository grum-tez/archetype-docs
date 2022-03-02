import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Checkbox, Container, Typography } from '@mui/material';
import styles from './index.module.css'
import { StyledEngineProvider } from '@mui/material/styles';

const GetStarted = () => {
  return (
    <Button variant="contained" disableElevation className={styles.getstarted} style={{
      textTransform: 'none',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '12px',
      paddingLeft : '18px',
      paddingRight: '18px'
    }}>
      Get started &nbsp;&nbsp;&gt;
    </Button>
  )
}

const Landing = () => {
  return (
      <Container maxWidth={false} sx={{ height: 'calc(100vh - 60px)' }}>
        <Typography>Ceci est un test</Typography>
        <GetStarted />
      </Container>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Smart Contract Archetype Language">
        <StyledEngineProvider injectFirst>
          <Landing />
        </StyledEngineProvider>
    </Layout>
  );
}
