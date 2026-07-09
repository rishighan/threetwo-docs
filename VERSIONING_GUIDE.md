# ThreeTwo Documentation Versioning Guide

## Overview

Your documentation is now set up with version support tied to ThreeTwo releases. Each version has its own complete set of documentation pages.

## ⚠️ Current Limitation

Due to docmd's navigation resolution system, when versioning is enabled, the global `navigation` config in `docmd.config.js` is not being applied to versioned pages. The navigation items are only showing on the root Latest version.

### Workaround: Use navigation.json Files

To restore full navigation, each version directory must have its own `navigation.json` file:

```
docs/navigation.json
docs-beta/navigation.json
docs-v0.0.1/navigation.json
```

## Available Versions

Your docs support 3 versions:

| Version | Directory | URL |
|---------|-----------|-----|
| **Latest (Development)** | `docs/` | `/` |
| **v0.0.1-beta** | `docs-beta/` | `/v0.0.1-beta/` |
| **v0.0.1** | `docs-v0.0.1/` | `/v0.0.1/` |

## Setting Up Navigation for Each Version

Create `navigation.json` in each version directory with the sidebar structure:

**docs/navigation.json**
**docs-beta/navigation.json**
**docs-v0.0.1/navigation.json**

```json
[
  {
    "title": "Documentation",
    "path": "/intro",
    "children": [
      { "title": "Introduction", "path": "/intro", "icon": "book" },
      { "title": "Install on unRaid", "path": "/unraid_install", "icon": "download" },
      { "title": "Docker Compose", "path": "/unraid_dockercompose", "icon": "package" },
      { "title": "Technical Architecture", "path": "/architecture", "icon": "layers" },
      { "title": "Resources & Help", "path": "/resources", "icon": "help-circle" }
    ]
  },
  {
    "title": "GitHub",
    "path": "https://github.com/rishighan/threetwo",
    "icon": "github",
    "external": true
  }
]
```

## Features

### Version Selector
Every page includes a version selector dropdown (top of sidebar) allowing users to switch between versions.

### Sticky Switching
When users switch versions, the URL path is preserved. For example:
- Reading `/intro` → Switch to v0.0.1-beta → Redirects to `/v0.0.1-beta/intro`

### Independent Documentation
Each version has its own directory with independent content that can be modified without affecting other versions.

## Adding a New Version

When v0.0.2 is released:

```bash
# Create new version directory
mkdir docs-v0.0.2
cp -r docs/* docs-v0.0.2/

# Update docmd.config.js versions array
# Add new version entry to the "all" array

# Rebuild
npm run build
```

## URL Mapping

```
Latest: /intro, /architecture, /resources, etc.
v0.0.1-beta: /v0.0.1-beta/intro, /v0.0.1-beta/architecture, etc.
v0.0.1: /v0.0.1/intro, /v0.0.1/architecture, etc.
```

## Learn More

- [docmd Versioning Docs](https://docs.docmd.io/configuration/versioning/)
