---
type: concept
title: "Local Development"
source: /local-development/
path: /local-development/
version: latest
updated: 2026-07-13
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-13T17:31:36.796Z"
---
---
sidebar_position: 1
id: local-development
title: Local Development
---

## Overview

`ThreeTwo!` is built as a set of microservices alongside a `node.js`/`React`
UI. To develop locally, you'll be running the UI and the relevant
microservices side-by-side, backed by `MongoDB`, `Elasticsearch` and `Redis`.

## Repositories

- [threetwo](https://github.com/rishighan/threetwo) - the main UI application
- [threetwo-metadata-service](https://github.com/rishighan/threetwo-metadata-service) - ComicVine and other metadata scraping
- [threetwo-core-service](https://github.com/rishighan/threetwo-core-service) - GCD, MAL and other core functions
- [threetwo-acquisition-service](https://github.com/rishighan/threetwo-acquisition-service) - `AirDC++`-backed acquisition

## Pre-requisites

- `node.js` (see the `engines` field of each repo's `package.json` for the
  supported version)
- `docker` and `docker compose` (or `podman`) for spinning up backing services
  like `MongoDB`, `Elasticsearch` and `Redis`
- A `ComicVine` API key for metadata scraping to work locally

## Setting up backing services

The easiest way to get `MongoDB`, `Elasticsearch` and `Redis` running locally
is via `docker compose`. See the
[Docker Compose guide](/unraid_dockercompose) for a reference stack you can
adapt for local use, minus the `threetwo` and microservice containers
themselves, since you'll be running those directly from source.

## Running the app

1. Clone the repositories you need above.
2. Install dependencies in each with `npm install`.
3. Copy `.env.example` (or create a `.env`) in each service, pointing at your
   local `MongoDB`, `Elasticsearch` and `Redis` instances.
4. Start each microservice you need with its `dev` script.
5. Start the UI with its `dev` script, which will proxy requests to the
   running microservices.

## Contributing

Once your local environment is up and running, feel free to open a pull
request against the relevant repository. If you run into issues setting
things up, reach out on [Discord](https://discord.gg/DbpcSNuM) or open an
issue on the repo.
