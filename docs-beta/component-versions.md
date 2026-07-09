# Component Versions - v0.0.1-beta

> 📦 Last updated: 8/20/2022

## Service Versions

| Service | Version | Release Date | Docker Image |
| --- | --- | --- | --- |
| [ThreeTwo (Main App)](https://github.com/rishighan/threetwo/releases/tag/v0.0.1) | `0.0.1` | 8/20/2022 | `frishi/threetwo:0.0.1` |
| [Metadata Service](https://github.com/rishighan/threetwo-metadata-service/releases/tag/v0.0.1) | `0.0.1` | 8/20/2022 | `frishi/threetwo-metadata-service:0.0.1` |
| [Core Service](https://github.com/rishighan/threetwo-core-service/releases/tag/v0.0.1) | `0.0.1` | 8/20/2022 | `frishi/threetwo-core-service:0.0.1` |
| [Docker Compose](https://github.com/rishighan/threetwo-docker-compose/releases/tag/v0.0.1) | `0.0.1` | 8/20/2022 | `-` |


## Installation

### Using Docker Compose

When deploying, ensure you use compatible versions of all services together.

```yaml
services:
  threetwo:
    image: frishi/threetwo:0.0.1

  metadata-service:
    image: frishi/threetwo-metadata-service:0.0.1

  core-service:
    image: frishi/threetwo-core-service:0.0.1
```

## Version History

For compatibility information between versions, see
[COMPATIBILITY.md](../COMPATIBILITY.md).

## Checking Your Versions

To verify which versions are running in your deployment:

```bash
# Check docker images in use
docker ps --format "table {{.Names}}\t{{.Image}}"

# Check running container versions
docker inspect <container-name> | grep -i version
```

## Release Notes

- **ThreeTwo (Main App)**: [v0.0.1](https://github.com/rishighan/threetwo/releases/tag/v0.0.1)
- **Metadata Service**: [v0.0.1](https://github.com/rishighan/threetwo-metadata-service/releases/tag/v0.0.1)
- **Core Service**: [v0.0.1](https://github.com/rishighan/threetwo-core-service/releases/tag/v0.0.1)

