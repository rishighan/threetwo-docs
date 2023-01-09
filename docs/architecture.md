---
sidebar_position: 4 
id: architecture
title: Technical Architecture
---

### High-level Architecture

`ThreeTwo!`, the app is built upon the microservice architecture. The UI is a standalone `node.js` app and the rest of the logic is broken into microservices.

The microservices deal with: 

1. Library functions (model orchestration, CRUD ops on comics, metadata)
2. Comic Vine (scraping issues, volumes and more)
3. Grand Comics Database (scraping, aggregations and more)
4. Helpers (image transformation, file-system ops, compression/uncompression)

### Technical stack

`ThreeTwo!` is written in `TypeScript` from UI to the services layer.

The technologies used are: 

1. React
2. Redux
3. moleculer
4. RabbitMQ
5. socket.io
6. node.js
7. Express
8. MongoDB
9. mongoose

