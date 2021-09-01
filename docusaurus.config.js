const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fourier Audio',
  tagline: '',
  url: 'https://docs.fourieraudio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fourieraudio', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Fourier Audio',
      logo: {
        alt: 'Fourier Audio',
        src: 'img/logo.svg',
        href: '/docs/intro', // Default to `siteConfig.baseUrl`.
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Welcome & Support',
        },
        {
          type: 'doc',
          docId: 'rewind/intro',
          position: 'left',
          label: 'Rewind',
        },
        {
          label: 'Website',
          href: 'https://www.fourieraudio.com',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Rewind',
              to: '/docs/rewind/intro',
            },
          ],
        },
        {
          title: 'Fourier Audio',
          items: [
            {
              label: 'Website',
              href: 'https://www.fourieraudio.com',
            },
            {
              label: 'Twitter',
              href: 'https://www.twitter.com/thefourieraudio',
            },
            {
              label: 'Lab',
              href: 'https://lab.fourieraudio.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fourieraudio/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fourier Audio Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fourieraudio/docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
