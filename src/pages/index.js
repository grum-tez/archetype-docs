import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Container, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Comment0 from './comment0.md';
import Comment1 from './comment1.md';
import Comment2 from './comment2.md';
import Comment3 from './comment3.md';
import styles from './index.module.css'

const GetStarted = () => {
  return (
    <Link to="/docs/installation" style={{ textDecoration: 'none' }}>
    <Button variant="contained" disableElevation className={styles.getstarted} style={{
      textTransform: 'none',
      fontFamily: 'IBM Plex Sans',
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
    </Button></Link>
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
    <Typography style={{ fontFamily: 'IBM Plex Sans' }}>Archetype is a general purpose language to develop Smart Contracts on the <Link to="https://tezos.com/">Tezos</Link> blockchain, with exclusive features to ease development, tests and formal verification.</Typography>
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
      <Grid container style={{ height: '100%', marginTop: '0px' }} spacing={4} direction="column" justifyContent="flex-start" alignItems="stretch">
        <Grid item style={{ height: '30%' }}>
          <Grid container direction="column" justifyContent="flex-end" style={{ height: '100%' }}>
            <Grid item xs={8}>
              <BigLogo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid spacing={3} style={{ paddingLeft: '0%', paddingRight : '10%' }} container>
            <Grid xs={12} sm={12} md={2.4} />
            <Grid item xs={12} sm={12} md={9.6}>
              <TagLine />
            </Grid>
            <Grid xs={12} sm={12} md={2.4} />
            <Grid item xs={12} sm={12} md={9.6}>
              <Introduction />
            </Grid>
            <Grid xs={12} sm={12} md={2.4} />
            <Grid item xs={12} sm={12} md={9.6}>
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

const designs = [
  { title : 'Easy Business Logic', tagline: 'Rational, date and duration types make business logic easy to express.', link: '/docs/language-basics/types' },
  { title : 'Explicit Execution Conditions', tagline: 'Execution conditions for the contract to execute are easy to read and check.', link: '/docs/reference/declarations/entrypoint#sections' },
  { title : 'State Machine Design', tagline: 'Design the contract as a state machine, with guard conditions on transitions.', link: '/docs/statemachine' },
  { title : 'Rich Storage API', tagline: 'Rich API to access and manipulate collections of assets.', link: '/docs/asset' },
]

const examples = [
  {
    code : `archetype pay_with_penalty(holder : address, cost : tez, deadline : date)

entry pay () {
  const penalty = now > deadline ? 7% * (now - deadline) / 1d : 0;
  transfer ((1 + penalty) * cost) to holder
}`,
    comment : <Comment0 />
  },
  {
    code : `archetype exec_cond_demo(admin : address, value : nat)

entry set_value (v : nat) {
  called by admin
  require {
    r1: transferred > value otherwise "INSUFFICIENT_TRANSFERRED_AMOUNT";
    r2: now < 2023-01-01    otherwise "TOO_LATE";
  }
  effect { value := v; }
}`,
    comment : <Comment1 />
  },
  {
    code: `archetype state_machine_demo(value : tez, holder : address)

states =
| Created initial
| Initialized

transition initialize () {
  from Created to Initialized
  when { transferred > value }
}`,
    comment: <Comment2 />
  },
  {
    code: `archetype asset_demo

asset vehicle {
  vin         : string;
  nb_repairs  : nat  = 0;
}

entry incr(n : nat) {
  vehicle.select(the.nb_repairs = n).update_all({ nb_repairs += 1 })
}`,
    comment: <Comment3 />
  }
]

const SmartDesign = (props) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div onClick={() => props.setSelected(props.id)}><Grid className={styles.smartdesign + ' ' + (props.selected? styles.selectedsd:'')} container direction="column" style={{
      padding: '12px',
      borderRadius: '8px',
    }}>
        <Grid item style={{ marginBottom: '4px' }}>
          <Typography style={{
            fontFamily: 'Montserrat',
            fontSize: '18px'
          }}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.designtagline} style={{
            fontFamily: 'IBM Plex Sans'
          }}>
            {props.tagline}
          </Typography>
        </Grid>
        <Grid item>
          <Link to={props.link} style={{ position: 'relative', marginTop: '4px', textDecoration: 'none' }}>Learn more{<ChevronRightIcon style={{ position: 'absolute', top: '0px'  }}/>}</Link>
        </Grid>
      </Grid></div>
    </Grid>
  )
}

const SmartDesigns = (props) => {
  return (
    <Grid container spacing={2} style={{ paddingLeft: '3%', paddingRight: '5%', marginTop: '10px' }}>
      { designs.map((d, i) => {
          return <SmartDesign key={'sd'+i} id={i} title={d.title} tagline={d.tagline} link={d.link} selected={props.selected == i} setSelected={props.setSelected}/>
        })
      }
    </Grid>
  )
}

const RightPannel = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Container maxWidth={false} className={styles.rightpannel} sx={{ minHeight: 'calc(100vh - 60px)' }}>
      <Grid container style={{ height: '100%' }} direction="column" justifyContent="flex-start" alignItems="center">
        <Grid item>
          <Typography variant="h5" style={{
            fontFamily: 'Montserrat',
            margin: '40px'
          }}>Control with Smart Designs</Typography>
        </Grid>
        <Grid item>
          <SmartDesigns selected={selected} setSelected={setSelected}/>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <Grid container direction="row" justifyContent="flex-start" style={{ paddingLeft: 'calc(3% + 12px)', paddingRight: '5%', marginTop: '10px' }}>
            <Typography style={{
              fontFamily: 'IBM Plex Sans',
              marginBottom: '12px'
            }}>Example:</Typography>
          </Grid>
        </Grid>
        <Grid item style={{ width: '100%', paddingLeft: '20px' }}>
          <CodeBlock className="language-archetype">{examples[selected].code}</CodeBlock>
        </Grid>
        <Grid item className={styles.designtagline} style={{ paddingLeft: 'calc(3% + 12px)', paddingRight: '5%', width: '100%' }}>
          {examples[selected].comment}
        </Grid>
      </Grid>
    </Container>
  )
}

const Landing = () => {
  return (
      <Container maxWidth={false} style={{ padding: 0, overflow: 'auto' }}>
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
      title={`${siteConfig.title}`}
      description="Smart Contract Archetype Language">
        <StyledEngineProvider injectFirst>
          <Landing />
        </StyledEngineProvider>
    </Layout>
  );
}
