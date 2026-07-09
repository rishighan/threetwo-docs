#!/usr/bin/env node

/**
 * Fetch latest releases from GitHub for all microservices
 * Updates versions.json with current release information
 */

import { Octokit } from 'octokit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_TOKEN = process.env.GH_TOKEN;
if (!GITHUB_TOKEN) {
  console.error('❌ GH_TOKEN environment variable not set');
  process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });

const SERVICES = [
  {
    name: 'ThreeTwo (Main App)',
    repo: 'rishighan/threetwo',
    dockerImagePattern: 'frishi/threetwo'
  },
  {
    name: 'Metadata Service',
    repo: 'rishighan/threetwo-metadata-service',
    dockerImagePattern: 'frishi/threetwo-metadata-service'
  },
  {
    name: 'Core Service',
    repo: 'rishighan/threetwo-core-service',
    dockerImagePattern: 'frishi/threetwo-core-service'
  },
  {
    name: 'Acquisition Service',
    repo: 'rishighan/threetwo-acquisition-service',
    dockerImagePattern: 'frishi/threetwo-acquisition-service'
  }
];

async function getLatestRelease(repo) {
  try {
    const [owner, repoName] = repo.split('/');
    const { data } = await octokit.rest.repos.getLatestRelease({
      owner,
      repo: repoName
    });

    return {
      tag: data.tag_name,
      version: data.tag_name.replace(/^v/, ''),
      date: data.published_at,
      url: data.html_url,
      name: data.name,
      prerelease: data.prerelease
    };
  } catch (error) {
    console.warn(`⚠️  Could not fetch release for ${repo}:`, error.message);
    return null;
  }
}

async function fetchAllVersions() {
  console.log('🔍 Fetching latest releases from GitHub...\n');

  const versions = {
    last_updated: new Date().toISOString(),
    update_source: 'automated',
    services: []
  };

  for (const service of SERVICES) {
    console.log(`📦 Fetching ${service.name}...`);

    const release = await getLatestRelease(service.repo);

    if (release) {
      const dockerImage = service.dockerImagePattern
        ? `${service.dockerImagePattern}:${release.version}`
        : null;

      const serviceInfo = {
        name: service.name,
        repo: service.repo,
        current_version: release.version,
        latest_release: {
          tag: release.tag,
          version: release.version,
          date: release.date,
          url: release.url,
          prerelease: release.prerelease
        }
      };

      if (dockerImage) {
        serviceInfo.latest_release.docker_image = dockerImage;
      }

      versions.services.push(serviceInfo);
      console.log(`   ✅ ${release.tag} (${release.date.split('T')[0]})`);
    } else {
      console.log(`   ⚠️  Failed to fetch`);
    }
  }

  // Write versions.json
  const versionsPath = path.join(process.cwd(), 'versions.json');
  fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2) + '\n');

  console.log(`\n✅ Updated versions.json with ${versions.services.length} services`);
  return versions;
}

fetchAllVersions().catch((error) => {
  console.error('❌ Error fetching versions:', error);
  process.exit(1);
});
