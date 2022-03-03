import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Grid, Container, Typography } from '@mui/material';
import styles from './index.module.css'
import { StyledEngineProvider } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const GetStarted = () => {
  return (
    <Button variant="contained" disableElevation className={styles.getstarted} style={{
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      borderRadius: '10px',
      padding: '12px',
      paddingLeft : '18px',
      paddingRight: '18px'
    }}
    sx={{ mr: { xs: 0, sm: 2 } }}
    endIcon={<ChevronRightIcon />} >
      Get started
    </Button>
  )
}

const BigLogo = () => <div className={styles.biglogo} style={{
  height: '100%',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}} />

const TagLine = () => {
  return (
    <Typography variant="h2" style={{ fontFamily: 'Montserrat' }}>Smart Contracts under <span className={styles.control}>Control</span></Typography>
  )
}

const Introduction = () => {
  return (
    <Typography>Archetype is a general purpose language to develop Smart Contracts on the Tezos blockchain, with exclusive features to ease development, tests and formal verification.</Typography>
  )
}

const NpmInstall = () => {
  return (
    <Button className={styles.npminstall} style={{
      textTransform: 'none',
      fontFamily: 'Roboto Mono',
      fontSize: '14px',
      borderRadius: '10px',
      borderWidth: '1px',
      padding: '12px',
      paddingLeft : '18px',
      paddingRight: '18px',
      width: '100%'
    }}
    sx={{
      display: 'inline-block',
      justifyContent: 'start',
      overflowX: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      position: 'relative',
      pr: 5,
    }}
    disableRipple
    variant="outlined"
    endIcon={<ContentCopyIcon />}>
      npm i -g @completium/completium-cli
    </Button>
  )
}

const LeftPannel = () => {
  return (
    <Container maxWidth={false} className={styles.leftpannel} sx={{ height: 'calc(100vh - 60px)' }}>
      <Grid container style={{ height: '100%', marginTop: '0px' }} spacing={4} container direction="column" justifyContent="flex-start" alignItems="stretch">
        <Grid item style={{ height: '30%' }}>
          <Grid container direction="column" justifyContent="flex-end" style={{ height: '100%' }}>
            <Grid item xs={8}>
              <BigLogo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid spacing={3} style={{ paddingLeft: '20%', paddingRight : '10%' }} container>
            <Grid item xs={12}>
              <TagLine />
            </Grid>
            <Grid item xs={12}>
              <Introduction />
            </Grid>
            <Grid item xs={12}>
              <Grid spacing={1} container justifyContent="flex-start"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '&& > *': { minWidth: 'clamp(0px, (492px - 100%) * 999 ,100%)' },
                }}>
                <Grid item >
                  <GetStarted />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <NpmInstall />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const RightPannel = () => {
  return (
    <Container maxWidth={false} className={styles.rightpannel} sx={{ height: 'calc(100vh - 60px)' }}>

    </Container>
  )
}

const Landing = () => {
  return (
      <Container style={{ padding: 0 }} maxWidth={false}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <LeftPannel />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RightPannel />
          </Grid>
        </Grid>
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
