export default {
  title: "ThreeTwo!",
  tagline: "Start Flipping!",
  description: "ThreeTwo Documentation - Your guide to getting started",

  // Site configuration
  site: {
    url: "https://rishighan.github.io/threetwo-docs/",
    baseUrl: "/threetwo-docs/",
  },

  // GitHub configuration for edit links
  github: {
    owner: "rishighan",
    repo: "threetwo-docs",
  },

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
    {
      title: "Documentation",
      path: "/intro",
      children: [
        { "title": "Introduction", "path": "/intro", "icon": "book" },
        { "title": "Install on unRaid", "path": "/unraid_install", "icon": "download" },
        { "title": "Docker Compose", "path": "/unraid_dockercompose", "icon": "package" },
        { "title": "Technical Architecture", "path": "/architecture", "icon": "layers" },
        { "title": "Resources & Help", "path": "/resources", "icon": "help-circle" }
      ]
    },
    {
      title: "Versions & Compatibility",
      children: [
        { "title": "Component Versions", "path": "/component-versions", "icon": "package-open" },
        { "title": "Compatibility Matrix", "path": "/COMPATIBILITY", "icon": "gitcompare" }
      ]
    },
    {
      "title": "GitHub",
      "path": "https://github.com/rishighan/threetwo",
      "icon": "github",
      "external": true
    }
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

  // Build settings
  build: {
    outDir: "./site",
    staticDir: "./static",
  },
};
