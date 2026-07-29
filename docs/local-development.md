---
sidebar_position: 1
id: local-development
title: Local Development
---

## Overview

`ThreeTwo!` is built on microservices. A `compose.yaml` brings the UI up along with the service dependencies.

## Repositories

To develop `ThreeTwo!` locally, begin by cloning these repositories to your machine:

- [threetwo](https://github.com/rishighan/threetwo) - the main UI application
- [threetwo-metadata-service](https://github.com/rishighan/threetwo-metadata-service) - Library management and core endpoints.
- [threetwo-core-service](https://github.com/rishighan/threetwo-core-service) - Metadata related endpoints.
- [threetwo-acquisition-service](https://github.com/rishighan/threetwo-acquisition-service) - `AirDC++` and other acquisition-related endpoints.

## Pre-requisites

1. Linux/macOS/Windows
2. `docker compose or podman compose`
3. Create 2 folders named `userdata` and `comics` inside `threetwo-core-service` folder. 
4. `AirDC++` instance installed and running for DC++ downloads.
5. `qBittorrent` instance installed and running for torrent downloads.


## Setting up dependencies (critical step)

`threetwo-core-service` comes with a `dependencies.docker-compose.yml` that has all the infrastructure for running the entire services stack.
Bring it up with: 
```
docker system prune -af && docker compose -f dependencies.docker-compose.yml up
```


## Bring up the services, one by one

### Explanation of Environment Variables

You will see these vars in several startup commands. The following table explains what they are.

| Environment Variable | Explanation | Required | Value |
|---|---|---|---|
| `COMICS_DIRECTORY` | folder containing the comics | Yes | Supply your own |
| `USERDATA_DIRECTORY` | scratch folder | Yes | Supply your own |
| `REDIS_URI` | Redis instance URI | Yes | `redis://127.0.0.1:6379` |
| `ELASTICSEARCH_URI` | Elasticsearch instance URI | Yes |  `http://localhost:9200` |
| `KAFKA_BROKER` | Kafka broker URI | Yes | `kafka1:9092` |
| `UNRAR_BIN_PATH` | Path to unrar in the container | Yes | Supply your own |
| `SEVENZ_BINARY_PATH` | Path to 7za in the container | Yes | Supply your own |
| `COMICVINE_API_KEY` | ComicVine API Key | Yes | Supply your own |

### `threetwo-core-service`

Bring up core service with: 

```
COMICS_DIRECTORY=<ABSOLUTE PATH TO COMICS DIRECTORY> \
USERDATA_DIRECTORY=<ABSOLUTE PATH TO USERDATA DIRECTORY> \
REDIS_URI=redis://127.0.0.1:6379 \
ELASTICSEARCH_URI=http://localhost:9200 \
MONGO_URI=mongodb://localhost:27017/threetwo \
KAFKA_BROKER=kafka1:9092 \
UNRAR_BIN_PATH=/opt/homebrew/bin/unrar \
SEVENZ_BINARY_PATH=/opt/homebrew/bin/7za \
npm run dev
```

### `threetwo-metadata-service`

```
COMICVINE_API_KEY=<YOUR COMICVINE API KEY> \
REDIS_URI=redis://127.0.0.1:6379 \
USERDATA_DIRECTORY=<ABSOLUTE PATH TO USERDATA DIRECTORY> \
npm run dev
```

### `threetwo-acquisition-service`

```
KAFKA_BROKER=kafka1:9092 npm run dev
```

## Bring up the UI

From within the `threetwo` folder, simply run:

```
yarn dev
```

## Contributing

Once your local environment is up and running, feel free to open a pull
request against the relevant repository. If you run into issues setting
things up, reach out on [Discord](https://discord.gg/DbpcSNuM) or open an
issue on the corresponding repo.
