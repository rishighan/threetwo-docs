export default {
  title: "ThreeTwo!",

  // Theme configuration
  theme: {
    logo: {
      src: "/img/threetwo.png",
      alt: "ThreeTwo Logo",
    },
    favicon: "/img/favicon.ico",
    colorScheme: "auto",
  },

  // Navigation
  navigation: [
    { title: "Introduction", path: "/intro", icon: "book" },
    { title: "Installation", path: "/installation", icon: "download" },
    {
      title: "Versions & Compatibility",
      children: [
        {
          title: "Component Versions",
          path: "/component-versions",
          icon: "package-open",
        },
        {
          title: "Compatibility Matrix",
          path: "/COMPATIBILITY",
          icon: "git-compare",
        },
      ],
    },
    {
      title: "For developers",
      children: [
        {
          title: "Local Development",
          path: "/local-development",
          icon: "terminal",
        },
      ],
    },
    {
      title: "GitHub",
      path: "https://github.com/rishighan/threetwo",
      icon: "github",
      external: true,
    },
  ],

  // Versioning Configuration
  versions: {
    current: "latest",
    position: "sidebar-top",
    all: [
      {
        id: "latest",
        dir: "docs",
        label: "Latest (Development)",
      },
      {
        id: "v0.0.1-beta",
        dir: "docs-beta",
        label: "v0.0.1-beta",
      },
      {
        id: "v0.0.1",
        dir: "docs-v0.0.1",
        label: "v0.0.1",
      },
    ],
  },
};
