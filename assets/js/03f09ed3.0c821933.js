"use strict";(self.webpackChunkthreetwo_docs=self.webpackChunkthreetwo_docs||[]).push([[115],{93:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={sidebar_position:2,id:"unraid_install",title:"Install ThreeTwo! on unRaid"},s=void 0,d={unversionedId:"unraid_install",id:"unraid_install",isDocsHomePage:!1,title:"Install ThreeTwo! on unRaid",description:"Notes",source:"@site/docs/unraid_install.md",sourceDirName:".",slug:"/unraid_install",permalink:"/threetwo-docs/docs/unraid_install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/unraid_install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"unraid_install",title:"Install ThreeTwo! on unRaid"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/threetwo-docs/docs/intro"},next:{title:"Resources & Help",permalink:"/threetwo-docs/docs/resources"}},p=[{value:"Notes",id:"notes",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Getting the VM up and running",id:"getting-the-vm-up-and-running",children:[]},{value:"Installing Debian on the VM",id:"installing-debian-on-the-vm",children:[]},{value:"Docker pre-requisites",id:"docker-pre-requisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Post-install checks",id:"post-install-checks",children:[]}],u={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Currently, ",(0,l.kt)("inlineCode",{parentName:"li"},"ThreeTwo!")," is installed along with its dependencies using ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose"),". The easiest way to install it on ",(0,l.kt)("inlineCode",{parentName:"li"},"unRAID")," is to use a VM."),(0,l.kt)("li",{parentName:"ul"},"Skip the VM creation steps, if you already have a Debian VM")),(0,l.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("p",null,"This guide assumes the following is installed or readily available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unRaid 6.9.2")," (this version was tested against ",(0,l.kt)("inlineCode",{parentName:"li"},"6.9.2"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Debian 10.x")," (Grab the install ",(0,l.kt)("inlineCode",{parentName:"li"},".iso")," ",(0,l.kt)("a",{parentName:"li",href:"https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.1.0-amd64-netinst.iso"},"here"),")")),(0,l.kt)("h3",{id:"getting-the-vm-up-and-running"},"Getting the VM up and running"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the ",(0,l.kt)("inlineCode",{parentName:"li"},"Debian")," install ",(0,l.kt)("inlineCode",{parentName:"li"},".iso")),(0,l.kt)("li",{parentName:"ol"},"Place it in a folder accessible by the VM"),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"VM")," tab in your ",(0,l.kt)("inlineCode",{parentName:"li"},"unRaid")," navigation"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Add VM")),(0,l.kt)("li",{parentName:"ol"},"From the list presented to you, click ",(0,l.kt)("inlineCode",{parentName:"li"},"Debian")," under ",(0,l.kt)("inlineCode",{parentName:"li"},"Linux")),(0,l.kt)("li",{parentName:"ol"},"On the VM configration page, enter the desired options for memory, CPU cores, vdisk allocation"),(0,l.kt)("li",{parentName:"ol"},"Make sure that you have set the volume containing the comics correctly for ",(0,l.kt)("inlineCode",{parentName:"li"},"Unraid Share")),(0,l.kt)("li",{parentName:"ol"},"Make sure that you have also set the ",(0,l.kt)("inlineCode",{parentName:"li"},"Unraid Mount tag")," option"),(0,l.kt)("li",{parentName:"ol"},"Make sure that the network bridge is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"br0")),(0,l.kt)("li",{parentName:"ol"},"Set a password for ",(0,l.kt)("inlineCode",{parentName:"li"},"VNC")," so you can follow through with a graphical install if you so wish")),(0,l.kt)("h3",{id:"installing-debian-on-the-vm"},"Installing Debian on the VM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Launch the VM via ",(0,l.kt)("inlineCode",{parentName:"li"},"VNC Remote")," option"),(0,l.kt)("li",{parentName:"ol"},"Follow the steps of the graphical installer"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," user and a normal ",(0,l.kt)("inlineCode",{parentName:"li"},"user")," and set the passwords for both")),(0,l.kt)("h3",{id:"docker-pre-requisites"},"Docker pre-requisites"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/354928/bash-sudo-command-not-found"},"Make sure you have")," ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo")),(0,l.kt)("li",{parentName:"ol"},"Make sure you have ",(0,l.kt)("inlineCode",{parentName:"li"},"ssh")," access for the user you created earlier"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh")," into the VM as the non-root user"),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/debian/"},"Docker Engine")),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/#install-compose-on-linux-systems"},"docker-compose")),(0,l.kt)("li",{parentName:"ol"},"Verify that ",(0,l.kt)("inlineCode",{parentName:"li"},"docker")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose")," commands work")),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the repo: ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rishighan/threetwo.git"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change the directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"cd threetwo"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create directories within ",(0,l.kt)("inlineCode",{parentName:"p"},"threetwo")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir comics userdata\n\nmkdir userdata/covers userdata/temporary userdata/expanded\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create an external docker network using ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo docker network create proxy"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo docker-compose up --build -d"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for a hot minute"))),(0,l.kt)("h3",{id:"post-install-checks"},"Post-install checks"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Once the ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up")," command successfully completes, you can check the spun-up containers using ",(0,l.kt)("inlineCode",{parentName:"li"},"docker ps")),(0,l.kt)("li",{parentName:"ol"})))}k.isMDXComponent=!0}}]);