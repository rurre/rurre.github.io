import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Pumkin's Tools",
  tagline: '',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://rurre.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rurre', // Usually your GitHub org/user name.
  projectName: 'rurre.github.io', // Usually your repo name.

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
      {
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          routeBasePath: "updates",
          path: "./blog",
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Pumkin",
      logo: {
        alt: "Pumkin's face",
        src: 'img/PumkinLaugh.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/updates', label: 'Updates', position: 'left'},
        {
          href: 'https://www.patreon.com/c/notPumkin',
          label: 'Patreon',
          position: 'right'
        },
        {
          href: 'https://x.com/notpumkin',
          label: 'Twitter / X',
          position: 'right',
        },
        {
          href: 'https://discord.gg/kZPYTCywYr',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/rurre/',
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
              label: 'Intro',
              to: '/docs/',
            },
            {
              label: 'Warudo Exporter ✨',
              to: '/docs/warudo-exporter',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/kZPYTCywYr',
            },
            {
              label: 'Twitter / X',
              href: 'https://x.com/notpumkin',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/pumkin.bsky.social',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Updates',
              to: '/Updates',
            },
            {
              label: 'Licenses',
              href: '/Licenses',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pumkin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
