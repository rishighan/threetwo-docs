---
sidebar_position: 2 
id: unRAID_dockercompose
title: Install ThreeTwo! on unRAID with the docker-compose plugin
---

### Notes

This guide goes over ThreeTwo! installation on unRAID using the [docker-compose manager](https://forums.unRAID.net/topic/114415-plugin-docker-compose-manager/) plugin. Currently, this is the recommended approach for unRAID users.

With the help of this plugin, you are able to pull the entire ThreeTwo! `docker-compose` stack up, down with the click of a button. It abstracts away a lot of complexity associated with writing out commands in the console.

That said, the plugin is still in beta, so you may experience strange behavior.  

### Pre-requisites

First things first, let's go over what the pre-requisites are:

1. The `docker-compose` configuration for ThreeTwo! now resides in its own repo here: https://github.com/rishighan/threetwo-docker-compose You will be using this as reference.
2. A working `AirDC++` install is necessary for `DC++` searching/downloading to work. You can install it through the unRAID via the CA store or via a [docker](https://airdcpp.net/download#linux-nas-docker-other)
3. `comics` and `userdata` folders.
   1. The `comics` folder _must_ be the folder `AirDC++` downloads comics to.
   2. Create the `userdata` folder under `/mnt/user/appdata/threetwo`
4. To get ComicVine to work for metadata scraping and other functions, you _must_ have a ComicVine API key. You can get one [here](https://comicvine.gamespot.com/api/). Metadata scraping will not work unless you supply an API key.
5. Open an unRAID terminal and create an `.env` file:
   1. Run this command: `nano /boot/config/plugins/compose.manager/projects/ThreeTwo/.env`
   2. Paste this into the file, replacing anything within `<>` with actual values:
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

### Installation

1. Install the `docker-compose manager` plugin from the unRAID CA store. After installation, you can find the plugin UI under the `Docker` tab.
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
      - redis
   volumes:
      - *comics-volume
      - *userdata-volume
   networks:
      - proxy

core-services:
   build:
      context: https://github.com/rishighan/threetwo-core-service.git
   image: frishi/threetwo-core-service
   container_name: core-services
   ports:
      - "3000:3000"
      - "3001:3001"
   depends_on:
      - db
      - redis
      - elasticsearch
   environment:
      name: core-services
      SERVICES: api,library,importqueue,settings,search,socket,imagetransformation,opds
   env_file: /boot/config/plugins/compose.manager/projects/ThreeTwo/.env
   volumes:
      - *comics-volume
      - *userdata-volume

   networks:
      - proxy

db:
   image: "bitnami/mongodb:latest"
   container_name: database
   networks:
      - proxy
   ports:
      - "27017:27017"
   volumes:
      - "mongodb_data:/bitnami/mongodb"

redis:
   image: "bitnami/redis:latest"
   container_name: queue
   environment:
      ALLOW_EMPTY_PASSWORD: "yes"
   networks:
      - proxy
   ports:
      - "6379:6379"

elasticsearch:
   image: docker.elastic.co/elasticsearch/elasticsearch:7.16.2
   container_name: elasticsearch
   environment:
      - "discovery.type=single-node"
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      - "xpack.security.enabled=true"
      - "xpack.security.authc.api_key.enabled=true"
      - "ELASTIC_PASSWORD=password"
   ulimits:
      memlock:
      soft: -1
      hard: -1
   ports:
      - 9200:9200
   networks:
      - proxy

networks:
proxy:
   external: true

volumes:
mongodb_data:
   driver: local
elastic:
  driver: local
   ```

5. Click `Save Changes`
6. Click `Compose Up` and check for errors.
7. If all goes well, you should see the following containers appear as icons without images in the unRAID `Docker Containers` panel:
   1. `threetwo-ui`
   2. `core-services`
   3. `metadata-service`
   4. `elasticsearch`
   5. `database`
   6. `queue`
8. You can look at the logs for these containers by clicking on their icons and then `Logs`

### Ports

1. `threetwo-ui`, runs on port 8050
2. `threetwo-core-service` on 3000
3. `threetwo-metadata-service` on 3080

### Getting Updates

Go to the `Docker Containers` tab from the unRAID web UI:

1. Click on `Compose Down`, and let the command finish running.
2. Click on `Compose Pull`, and let it finish running.
3. Click on `Compose Up` to bring up the stack. 