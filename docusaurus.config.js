// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");
import { themes } from "prism-react-renderer";
console.log("endha", themes);
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ThreeTwo!",
  tagline: "Start Flipping!",
  url: "https://rishighan.github.io",
  baseUrl: "/threetwo-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rishighan", // Usually your GitHub org/user name.
  projectName: "threetwo-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ThreeTwo!",
        logo: {
          alt: "My Site Logo",
          src: "img/threetwo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Quick Start",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/rishighan/threetwo",
            label: "GitHub",
            position: "right",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/rishighan/threetwo",
              },
              {
                label: "Discord",
                href: "https://discord.gg/n4HZ4j33uT",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Rishi Ghan",
                href: "https://rishighan.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quasar Software, LLC. Built with Docusaurus.`,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
