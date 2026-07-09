# ThreeTwo Documentation

This website is built using [docmd](https://docmd.io/), a modern, zero-config
documentation engine that converts Markdown files into production-ready
documentation sites.

## Installation

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

## Local Development

Start the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

This command starts a local development server (typically at
`http://localhost:3000`) and automatically rebuilds as you make changes.

## Build

Generate static content for production:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This command generates static HTML into the `build` directory.

## Serve Built Site Locally

To test the built site locally:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

This builds the site and serves it locally.

## Deployment

docmd supports one-command deployment with built-in support for various hosting
platforms.

### Deploy to GitHub Pages

```bash
npm run deploy
```

Or with yarn:

```bash
yarn deploy
```

For more deployment options, see the
[docmd documentation](https://docs.docmd.io/deployment/).

## Project Structure

- `/docs` - Main documentation pages
- `/blog` - Blog posts and articles
- `/static` - Static assets (images, icons, etc.)
- `docmd.config.js` - Site configuration

## Configuration

Edit `docmd.config.js` to customize:

- Site title and description
- Navigation menu
- Theme and styling
- Plugins and features
- Build options

See the [docmd configuration docs](https://docs.docmd.io/configuration/) for
all available options.

## Learn More

- [docmd Documentation](https://docs.docmd.io/)
- [docmd GitHub](https://github.com/docmd-io/docmd)
- [Markdown Syntax Reference](https://docs.docmd.io/content/syntax/)
