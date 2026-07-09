#!/usr/bin/env node

/**
 * Generate component-versions.md from versions.json
 * Creates documentation for all version branches
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getVersionsData() {
  const versionsPath = path.join(process.cwd(), 'versions.json');
  if (!fs.existsSync(versionsPath)) {
    console.error('❌ versions.json not found');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(versionsPath, 'utf8'));
}

function generateMarkdown(versions, versionTag = 'latest') {
  const updateDate = new Date(versions.last_updated).toLocaleDateString('en-US');

  let markdown = `# Component Versions`;

  if (versionTag !== 'latest') {
    markdown += ` - ${versionTag}`;
  }

  markdown += `

> 📦 Last updated: ${updateDate}

## Service Versions

| Service | Version | Release Date | Docker Image |
| --- | --- | --- | --- |
`;

  for (const service of versions.services) {
    const version = service.latest_release.version;
    const date = new Date(service.latest_release.date).toLocaleDateString('en-US');
    const dockerImage = service.latest_release.docker_image || '-';
    const releaseUrl = service.latest_release.url;

    markdown += `| [${service.name}](${releaseUrl}) | \`${version}\` | ${date} | \`${dockerImage}\` |\n`;
  }

  markdown += `
## Installation

### Using Docker Compose

When deploying, ensure you use compatible versions of all services together.

\`\`\`yaml
services:
  threetwo:
    image: frishi/threetwo:${versions.services[0]?.latest_release.version || 'TAG'}

  metadata-service:
    image: frishi/threetwo-metadata-service:${versions.services[1]?.latest_release.version || 'TAG'}

  core-service:
    image: frishi/threetwo-core-service:${versions.services[2]?.latest_release.version || 'TAG'}

  acquisition-service:
    image: frishi/threetwo-acquisition-service:${versions.services[3]?.latest_release.version || 'TAG'}
\`\`\`

## Version History

For compatibility information between versions, see
[COMPATIBILITY.md](../COMPATIBILITY.md).

## Checking Your Versions

To verify which versions are running in your deployment:

\`\`\`bash
# Check docker images in use
docker ps --format "table {{.Names}}\\t{{.Image}}"

# Check running container versions
docker inspect <container-name> | grep -i version
\`\`\`

## Release Notes

- **${versions.services[0]?.name}**: [${versions.services[0]?.latest_release.tag}](${versions.services[0]?.latest_release.url})
- **${versions.services[1]?.name}**: [${versions.services[1]?.latest_release.tag}](${versions.services[1]?.latest_release.url})
- **${versions.services[2]?.name}**: [${versions.services[2]?.latest_release.tag}](${versions.services[2]?.latest_release.url})
- **${versions.services[3]?.name}**: [${versions.services[3]?.latest_release.tag}](${versions.services[3]?.latest_release.url})
`;

  return markdown;
}

function generateAllVersions() {
  console.log('📝 Generating component-versions.md documentation...\n');

  const versions = getVersionsData();

  // Paths to update
  const docPaths = [
    'docs/component-versions.md',
    'docs-beta/component-versions.md',
    'docs-v0.0.1/component-versions.md'
  ];

  const versionTags = ['latest', 'v0.0.1-beta', 'v0.0.1'];

  for (let i = 0; i < docPaths.length; i++) {
    const docPath = docPaths[i];
    const versionTag = versionTags[i];

    // Create parent directory if it doesn't exist
    const dir = path.dirname(docPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const markdown = generateMarkdown(versions, versionTag);
    fs.writeFileSync(docPath, markdown + '\n');
    console.log(`   ✅ Generated ${docPath}`);
  }

  console.log(`\n✅ Generated component-versions.md for all versions`);
}

generateAllVersions().catch((error) => {
  console.error('❌ Error generating documentation:', error);
  process.exit(1);
});
