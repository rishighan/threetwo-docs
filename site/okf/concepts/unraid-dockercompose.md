---
type: concept
title: "Install ThreeTwo! on unRAID with docker-compose"
source: /unraid_dockercompose/
path: /unraid_dockercompose/
version: latest
updated: 2026-07-10
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-10T16:44:12.845Z"
---
---
sidebar_position: 2
id: unRAID_dockercompose
title: Install ThreeTwo! on unRAID with docker-compose
---

## Notes

This guide goes over ThreeTwo! installation on unRAID using the
[docker-compose manager](https://forums.unRAID.net/topic/114415-plugin-docker-compose-manager/)
plugin. Currently, this is the recommended approach for unRAID users.

With the help of this plugin, you are able to pull the entire ThreeTwo!
`docker-compose` stack up, down with the click of a button. It abstracts away
a lot of complexity associated with writing out commands in the console.

That said, the plugin is still in beta, so you may experience strange behavior.

## Pre-requisites

First things first, let's go over what the pre-requisites are:

1. The `docker-compose` configuration for ThreeTwo! is in its own repository
   [threetwo-docker-compose](https://github.com/rishighan/threetwo-docker-compose).
   You will be using this as reference.
2. A working `AirDC++` install is necessary for `DC++` searching/downloading to
   work. You can install it through the unRAID via the CA store or via a
   [Docker image](https://airdcpp.net/download#linux-nas-docker-other)
3. `comics` and `userdata` folders.
   1. The `comics` folder _must_ be the folder `AirDC++` downloads comics to.
   2. Create the `userdata` folder under `/mnt/user/appdata/threetwo`
4. To get ComicVine to work for metadata scraping and other functions, you
   _must_ have a ComicVine API key. You can get one
   [on the ComicVine website](https://comicvine.gamespot.com/api/). Metadata
   scraping will not work unless you supply an API key.
5. Open an unRAID terminal and create an `.env` file:
   1. Run this command:
      `nano /boot/config/plugins/compose.manager/projects/ThreeTwo/.env`
   2. Paste this into the file, replacing anything within `<>` with actual
      values:

      ```bash
      UNDERLYING_HOSTNAME=<UNRAID_HOSTNAME>
      COMICS_DIRECTORY=<PATH_TO_COMICS_DIRECTORY>
      USERDATA_DIRECTORY=/mnt/user/appdata/threetwo/userdata

      COMICVINE_API_KEY=<YOUR_COMICVINE_API_KEY>

      LOGGER=true
      LOGLEVEL=info
      SERVICEDIR=dist/services

      CHOKIDAR_USEPOLLING=true

      UNRAR_BIN_PATH=/usr/bin/unrar
      SEVENZ_BINARY_PATH=/usr/bin/7za
      MONGO_URI=mongodb://db:27017/threetwo
      ELASTICSEARCH_URI=http://elasticsearch:9200
      REDIS_URI=redis://redis:6379
      TRANSPORTER=redis://redis:6379
      CACHER=Memory
      ```

## Installation

1. Install the `docker-compose manager` plugin from the unRAID CA store. After
   installation, you can find the plugin UI under the `Docker` tab.
2. Create a new stack, give it a name.
3. Hover over the gear next to it and click on `Edit Stack`.
4. Copy-paste this into the textarea:

   ```yaml
   version: "3.7"

   x-userdata-volume: &userdata-volume
     type: bind
     source: ${USERDATA_DIRECTORY}
     target: /userdata

   x-comics-volume: &comics-volume
     type: bind
     source: ${COMICS_DIRECTORY}
     target: /comics

   services:
     threetwo:
       build:
         context: https://github.com/rishighan/threetwo.git
         dockerfile: Dockerfile
       image: frishi/threetwo
       container_name: threetwo-ui
       env_file: /boot/config/plugins/compose.manager/projects/ThreeTwo/.env
       restart: unless-stopped
       ports:
         - "8050:8050"
         - "3050:3050"
       links:
         - core-services
       depends_on:
         - db
         - elasticsearch
         - redis
       networks:
         - proxy

     metadata-service:
       build:
         context: https://github.com/rishighan/threetwo-metadata-service.git
       image: frishi/threetwo-metadata-service
       container_name: metadata-service
       ports:
         - "3080:3080"
       environment:
         SERVICES: api,comicvine
       env_file: /boot/config/plugins/compose.manager/projects/ThreeTwo/.env
       depends_on:
         - db
         - redis
       networks:
         - proxy

     core-services:
       build:
         context: https://github.com/rishighan/threetwo-core-service.git
       image: frishi/threetwo-core-service
       container_name: core-services
       ports:
         - "3000:3000"
       environment:
         SERVICES: gcd,mal
       env_file: /boot/config/plugins/compose.manager/projects/ThreeTwo/.env
       depends_on:
         - db
         - redis
       networks:
         - proxy

     db:
       image: mongo:4.4
       container_name: mongo-db
       restart: unless-stopped
       ports:
         - "27017:27017"
       environment:
         MONGO_INITDB_DATABASE: threetwo
       volumes:
         - /mnt/user/appdata/threetwo/db/data:/data/db
         - /mnt/user/appdata/threetwo/db/config:/data/configdb
       networks:
         - proxy

     elasticsearch:
       image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
       container_name: elasticsearch
       restart: unless-stopped
       environment:
         - discovery.type=single-node
         - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
       ulimits:
         memlock:
           soft: -1
           hard: -1
       volumes:
         - /mnt/user/appdata/threetwo/elasticsearch/data:/usr/share/elasticsearch/data
       ports:
         - "9200:9200"
       networks:
         - proxy

     redis:
       image: redis:6-alpine
       container_name: redis
       restart: unless-stopped
       ports:
         - "6379:6379"
       volumes:
         - /mnt/user/appdata/threetwo/redis:/data
       networks:
         - proxy

   volumes:
     userdata:
       <<: *userdata-volume
     comics:
       <<: *comics-volume

   networks:
     proxy:
       driver: bridge
   ```

5. Save and pop the stack `up`

## Post-install checks

1. Once the stack comes up, you should be able to access the ThreeTwo! UI on
   port `8050`
2. Check the logs of the containers to see if there are any errors
