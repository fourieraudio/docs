const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fourier Audio",
  tagline: "",
  url: "https://docs.fourieraudio.com",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  markdown: {
    mermaid: true,
  },
  favicon: "img/favicon.ico",
  organizationName: "fourieraudio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Fourier Audio",
      logo: {
        alt: "Fourier Audio",
        src: "img/logo.svg",
        width: 60,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebars",
          position: "left",
          label: "Support & Downloads",
          docsPluginId: "info",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebars",
          position: "left",
          label: "User Manual",
        },
        {
          label: "Forum",
          href: "https://discourse.fourieraudio.com",
        },
        {
          label: "Website",
          href: "https://www.fourieraudio.com",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [
            {to: '/downloads', label: "All versions"},
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "transform.engine",
              to: "/",
            },
          ],
        },
        {
          title: "Fourier Audio",
          items: [
            {
              label: "Website",
              href: "https://www.fourieraudio.com",
            },
            {
              label: "Twitter",
              href: "https://www.twitter.com/fourieraudio",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/fourieraudio/docs",
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
      "@docusaurus/preset-classic",
      {
        docs: {
          path: 'manual',
          routeBasePath: 'manual',
          sidebarPath: "./sidebars-manual.js",
          editUrl: "https://github.com/fourieraudio/docs/blob/main/manual/",
          includeCurrentVersion: process.env.NODE_ENV === "development",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    ['@docusaurus/plugin-content-docs', {
      id: 'info',
      path: 'info',
      routeBasePath: '/',
      sidebarPath: './sidebars-info.js',
      editUrl: "https://github.com/fourieraudio/docs/blob/main/",
    }]
  ],
};
