---
sidebar_position: 0
sidebar_label: Architecture
---

# Architecture

## Store

## UI Components hierarchy

<div style={{ lineHeight : '20px', fontFamily: 'Roboto Mono' }}>

.<br/>
└── App<br/>
    &ensp;&ensp;&ensp;&ensp;└── DApp<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── MainPanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;├── AddPoll<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;├── AddForm<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;└── PollPreview<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;└── PollPanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;├── PickPoll<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;└── PollCard<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;└── RespondPoll<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;└── PollPanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    └── ChoicePanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── TopBar<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── EventNotifications<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;├── EventCard<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;└── NotificationMenu<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── GitHubLink<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── LoginButton<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;└── WalletInfo<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── TezosIcon<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;└── ThemeSwitch<br/>
</div>
