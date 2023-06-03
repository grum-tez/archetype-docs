// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('./src/theme/prism-dark-theme');
const lightCodeTheme = require('./src/theme/prism-light-theme');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archetype Documentation',
  tagline: 'Primary documentation for Archetype language',
  url: 'https://archetype-lang.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon@2x.png',
  organizationName: 'completium', // Usually your GitHub org/user name.
  projectName: 'archetype-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/completium/archetype-docs/blob/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.3.2',
              path: '/',
              badge: false
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        appId: 'CGUX2ID3ID',
        apiKey: '3c1ad8ee0b1c6ed187f4626eea33fea9',
        indexName: 'archetype-lang'
        // The application ID provided by Algolia
        //appId: 'YW41129NVN',
        // Public API key: it is safe to commit it
        //apiKey: '16bccd1e569227f209e9dc8330e84a98',
        //indexName: 'opentezos',
        // Optional: see doc section below
        //contextualSearch: false,

      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Archetype Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            docId: 'introduction',
            position: 'left',
            sidebarId: 'docs',
            label: 'Language',
          },
          {
            type: 'docSidebar',
            position: 'left',
            docId: 'templates/contracts',
            sidebarId: 'templates',
            label: 'Templates',
          },
          {
            type: 'docSidebar',
            position: 'left',
            docId: 'templates/contracts',
            sidebarId: 'tests',
            label: 'Tests',
          },
          {
            type: 'docSidebar',
            position: 'left',
            docId: 'templates/dapps',
            sidebarId: 'dapps',
            label: 'DApps',
          },
          {
            type: 'docSidebar',
            position: 'left',
            docId: 'templates/contracts',
            sidebarId: 'cli',
            label: 'CLI',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/installation', label: 'latest: 1.4.3', position: 'right'},
          {
            href: 'https://tezos.com',
            label: 'Tezos',
            position: 'right',
          },
          {
            href: 'https://github.com/edukera/archetype-lang',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Language',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://app.slack.com/client/T59LZHQ11/C01F6SH4SMB',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/archetype_lang',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/edukera/archetype-lang',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Edukera, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
