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
import CodeBlock from '@theme/CodeBlock';
import Comment0 from './comment0.mdx';
import Comment1 from './comment1.mdx';
import Comment4 from './comment4.mdx';

const GetStarted = () => {
  return (
    <Link to="/docs/install" style={{ textDecoration: 'none' }}>
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
    <Typography style={{ fontFamily: 'IBM Plex Sans' }}>Archetype is a general purpose language to develop Smart Contracts on the Tezos blockchain, with exclusive features to ease development, tests and formal verification.</Typography>
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

const designs = [
  { title : 'Easy Business Logic', tagline: 'Rational, date and duration types make business logic easy to express.', link: '/docs/language-basics/number' },
  { title : 'Explicit Execution Conditions', tagline: 'Execution conditions for the contract to execute are easy to read and check.', link: '/docs/declarations/entrypoint' },
  { title : 'State Machine Design', tagline: 'Design the contract as a state machine, with guard conditions on transitions.', link: '/docs/state-machine/state' },
  { title : 'Rich Storage API', tagline: 'Rich API to access and manipulate collections of records.', link: '/docs/assets/intro' },
]

const examples = [
  {
    code : `archetype pay_with_penalty(holder : address, cost : tez, deadline : date)

entry pay () {
  var penalty =
    if now > deadline then
      (7% * (now - deadline) / 1d) * cost
    else 0tz;
  transfer (cost + penalty) to holder
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
| Terminated

transition initialize () {
  from Created to Initialized
  when { transferred > value }
}

transition terminate () {
  from Initialized to Terminated
  effect { transfer balance to holder }
}`,
    comment: ''
  },
  {
    code: `archetype asset_demo

asset vehicle {
  vin          : string;
  nbrepairs    : nat  = 0;
  dateofrepair : date = now;
}

entry repair_oldest () {
  for v in vehicle.sort(dateofrepair).select(the.nbrepairs = 0).head(3) do
    vehicle.update(v, { nbrepairs += 1; dateofrepair = now })
  done
}`,
    comment: <Comment4 />
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
        <Grid item style={{ width: '100%' }}>
          <CodeBlock className="language-archetype" style={{ borderRadius: '0px' }}>{examples[selected].code}</CodeBlock>
        </Grid>
        <Grid item className={styles.designtagline} style={{ paddingLeft: 'calc(3% + 12px)', paddingRight: '5%' }}>
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
      title={`Hello from ${siteConfig.title}`}
      description="Smart Contract Archetype Language">
        <StyledEngineProvider injectFirst>
          <Landing />
        </StyledEngineProvider>
    </Layout>
  );
}
