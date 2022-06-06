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
  url: 'https://completium.github.io',
  baseUrl: '/archetype-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.3.0',
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        appId: '<NEW_APP_ID>',
        apiKey: '<NEW_SEARCH_API_KEY>',
        indexName: 'archetype'
        // The application ID provided by Algolia
        //appId: 'YW41129NVN',
        // Public API key: it is safe to commit it
        //apiKey: '16bccd1e569227f209e9dc8330e84a98',
        //indexName: 'opentezos',
        // Optional: see doc section below
        //contextualSearch: false,

      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Archetype Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
                href: 'https://twitter.com/archetype',
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
