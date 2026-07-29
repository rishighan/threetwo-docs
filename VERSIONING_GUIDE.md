# ThreeTwo Documentation Versioning Guide

## Overview

Your documentation is now set up with version support tied to ThreeTwo releases.
Each version has its own complete set of documentation pages that can be
independently maintained.

## Available Versions

The documentation currently supports 3 versions:

| Version                  | Directory      | URL             |
| ------------------------ | -------------- | --------------- |
| **Latest (Development)** | `docs/`        | `/`             |
| **v0.0.1-beta**          | `docs-beta/`   | `/v0.0.1-beta/` |
| **v0.0.1**               | `docs-v0.0.1/` | `/v0.0.1/`      |

## Directory Structure

```text
threetwo-docs/
├── docs/                    # Latest/Development version
│   ├── intro.md
│   ├── installation.md
│   └── navigation.json      # Version-specific navigation
├── docs-beta/              # v0.0.1-beta version
│   ├── intro.md
│   ├── ...
│   └── navigation.json
├── docs-v0.0.1/            # v0.0.1 version
│   ├── intro.md
│   ├── ...
│   └── navigation.json
└── docmd.config.js         # Main configuration
```

## Features

### Version Selector

Every page includes a version selector dropdown (top of sidebar) allowing users
to switch between versions:

- Latest (Development)
- v0.0.1-beta
- v0.0.1

### Sticky Switching

When users switch versions, the URL path is preserved. For example:

- Reading `/intro` on Latest → Switch to v0.0.1-beta → Redirects to
  `/v0.0.1-beta/intro`

### Independent Documentation

Each version has its own directory with independent content that can be
modified without affecting other versions:

- Modify `docs/navigation.json` for Latest
- Modify `docs-beta/navigation.json` for v0.0.1-beta
- Modify `docs-v0.0.1/navigation.json` for v0.0.1

### Root SEO

The Latest version serves at the root (`/`), ensuring SEO benefits go to your
current documentation.

## Adding a New Version

When v0.0.2 is released:

1. Create a new docs directory:

   ```bash
   mkdir docs-v0.0.2
   cp -r docs/* docs-v0.0.2/
   ```

2. Update `docmd.config.js`:

   ```javascript
   versions: {
     current: "latest",
     position: "sidebar-top",
     all: [
       { id: "latest", dir: "docs", label: "Latest (Development)" },
       { id: "v0.0.2", dir: "docs-v0.0.2", label: "v0.0.2" },
       { id: "v0.0.1-beta", dir: "docs-beta", label: "v0.0.1-beta" },
       { id: "v0.0.1", dir: "docs-v0.0.1", label: "v0.0.1" },
     ],
   }
   ```

3. Rebuild:

   ```bash
   npm run build
   ```

## Updating Documentation

### Update Latest Version (Development)

Edit files in `docs/` directory directly.

### Update Specific Release Version

Edit files in the corresponding version directory:

- For v0.0.1-beta: Edit `docs-beta/intro.md`
- For v0.0.1: Edit `docs-v0.0.1/intro.md`

### Build and Test

```bash
npm run build          # Generate all versions
npm run dev           # Test locally at http://localhost:3000
```

## URL Mapping

```text
Latest Version (at root):
  /intro
  /installation

v0.0.1-beta Version:
  /v0.0.1-beta/intro
  /v0.0.1-beta/installation

v0.0.1 Version:
  /v0.0.1/intro
  /v0.0.1/installation
```

## Generated Site Structure

After `npm run build`, your site structure will be:

```text
site/
├── index.html (redirects or latest intro)
├── intro/index.html
├── installation/index.html
├── v0.0.1-beta/
│   ├── intro/index.html
│   ├── installation/index.html
│   └── ...
└── v0.0.1/
    ├── intro/index.html
    ├── installation/index.html
    └── ...
```

## Tips

- Keep consistent naming and structure across versions for best "Sticky
  Switching" experience
- Update release notes in the Latest version when new versions are released
- Consider adding a "What's New" or "Changelog" section to Latest docs
- Archive very old versions by removing them from the config (keeps site lean)

## Learn More

- [docmd Versioning Docs](https://docs.docmd.io/configuration/versioning/)
