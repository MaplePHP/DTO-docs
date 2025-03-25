// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Darn Tidy Object (DTO)',
  tagline: 'For developers who like their data structured and their coffee strong',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://maplephp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DTO/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MaplePHP', // Usually your GitHub org/user name.
  projectName: 'DTO', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-F7SH95V05S',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // Set dark mode as default
        disableSwitch: false, // Allow users to switch themes (set true to disable)
        respectPrefersColorScheme: false, // Ignore user's OS/browser preference
      },
      // Replace with your project's social card
      image: 'img/dto-social-card.png',
      navbar: {
        title: 'Darn Tidy Object (DTO)',
        logo: {
          alt: 'Darn Tidy Object (DTO)',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/MaplePHP/DTO',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/intro#-installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MaplePHP/DTO',
              },
              {
                label: 'LinkedIn',
                href: 'https://se.linkedin.com/in/daniel-ronkainen-161b3386/en',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blunder',
                href: 'https://github.com/MaplePHP/Blunder',
              },
              {
                label: 'Prompts',
                href: 'https://github.com/MaplePHP/Prompts',
              },
              {
                label: 'Unitary',
                href: 'https://github.com/MaplePHP/Unitary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darn Tidy Object (DTO), Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['php'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
