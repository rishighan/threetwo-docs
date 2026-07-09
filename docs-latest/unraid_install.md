---
sidebar_position: 2 
id: unraid_install
title: Install ThreeTwo! on unRaid
---

### Notes

- Currently, `ThreeTwo!` is installed along with its dependencies using `docker-compose`. The easiest way to install it on `unRAID` is to use a VM.
- Skip the VM creation steps, if you already have a Debian VM

### Pre-requisites

This guide assumes the following is installed or readily available:

- `unRaid 6.9.2` (this version was tested against `6.9.2`)
- `Debian 10.x` (Grab the install `.iso` [here](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.1.0-amd64-netinst.iso))

### Getting the VM up and running

1. Download the `Debian` install `.iso`
2. Place it in a folder accessible by the VM
3. Go to the `VM` tab in your `unRaid` navigation
4. Click `Add VM`
5. From the list presented to you, click `Debian` under `Linux`
6. On the VM configration page, enter the desired options for memory, CPU cores, vdisk allocation
7. Make sure that you have set the volume containing the comics correctly for `Unraid Share`
8. Make sure that you have also set the `Unraid Mount tag` option
9. Make sure that the network bridge is set to `br0`
10. Set a password for `VNC` so you can follow through with a graphical install if you so wish

### Installing Debian on the VM

1. Launch the VM via `VNC Remote` option
2. Follow the steps of the graphical installer
3. Create a `root` user and a normal `user` and set the passwords for both
   
### Docker pre-requisites

1. [Make sure you have](https://unix.stackexchange.com/questions/354928/bash-sudo-command-not-found) `sudo`
2. Make sure you have `ssh` access for the user you created earlier
3. `ssh` into the VM as the non-root user
4. Install [Docker Engine](https://docs.docker.com/engine/install/debian/)
5. Install [docker-compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)
6. Verify that `docker` and `docker-compose` commands work

### Installation

1. Clone the repo: `git clone https://github.com/rishighan/threetwo.git`
2. Change the directory: `cd threetwo`
3. Create directories within `threetwo`
    ```bash
    mkdir comics userdata

    mkdir userdata/covers userdata/temporary userdata/expanded
    ```
4. Create an external docker network using `sudo docker network create proxy`
5. Run `sudo docker-compose up --build -d`
6. Wait for a hot minute

### Post-install checks

1. Once the `docker-compose up` command successfully completes, you can check the spun-up containers using `docker ps`
2. 
