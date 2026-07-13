---
type: concept
title: "Install ThreeTwo"
source: /unraid_install/
path: /unraid_install/
version: latest
updated: 2026-07-13
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-13T17:31:36.797Z"
---
---
sidebar_position: 2
id: unraid_install
title: Install ThreeTwo
---

### Notes

This is the currently recommended method of installation. Container-based installation is going to offer 
you the most flexibility in terms of setting storage volumes and reducing setup time.

### Pre-requisites

This guide assumes the following:

- You are running an OS that supports:
- `docker` and `docker compose` or
- `podman` and `podman compose`

### Installation details

You will be installing the `threetwo-ui` along with its dependencies, the microservices 
that constitute all of its major functions.
