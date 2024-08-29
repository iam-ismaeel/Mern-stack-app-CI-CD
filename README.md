# MERN-STACK-APP DEPLOYMENT TO A DEVELOPMENT KUBERNETES ENVIRONMENT
 shield.io tags
 
 A PIC FOR END-END DEVOPS DEPLOYMENT
SHORT overview of Devops methodology
table of content 
jire ticket issued based on creating a complete end-end deployment to a development env
automated with the corresponding github repository
 . github admin grants access to the private repo
 . code checkout to the github repo
   for the purpose of this project
 . use iac tool (terraform) to create the Virtual machines(AWS EC2 instances in ubuntu) to be used for our CI,such as
 jenkins-master: A continuos integration tool,,it serves as an orchestrator for other servers and tools.
 Sonarqube: A scanning tool
 Nexus: A record taking tool
 jenkins-slave: To ease the master off its load.
 Ansible_control_node: A server used for configuration of other servers.
 
  .list the prereqisite before being able to create th infra such as an aws IAM user acc,aws cli installed,credentials for 
 authenticstion,terrsform installed and a text editor.
 . show pic of the infra creation in process and the final products in aws
 . display the terraform codes used for the creaton

 . A configuration management tool(Ansible)
 more often than not there will be a need to install softwares,upgrading the servers and configuring mulitple servers.
 doing these tasks manually is too tasky,hence using a confguration management tool such as ansible,aid with automation of 
 this.
 
for the purpose of our project,we will use ansible playbook;
- for the CI-processes and steps as explained by aditya
In this section,we will explain the continuous integration processes(CI)
Table of content
1. Create four AWS EC2 instances with terraform.
2. Configure the instances with the appropriate servers with the aid ansible playbooks.
 i. VM 1 for Jenkins_master
 ii. VM 2 for Sonarqube 
 iii. VM 3 for Nexus
 iv.  VM 4 for Jenkins-slave
3. Sign into each server via web browser.
4. Go to jenkins,install the needed plugins and configure them.



to install jenkins in the jenkins server,nexus and sonarqube.
to start,write the playbooks for each of the EC2 host machines(servers)
below are the playbooks for each of the servers.
an inventory file which holds the info about the hosts machine to be configured by ansible is also created,

note the format: code,commands,little progress and result.


using ansible
to install ansible in the ansible controlnode using ubuntu

Install the software-properties-common
```
$ sudo apt-get install software-properties-common
```
The official projects personal package archive 
```
$ sudo apt-add-repository ppa:ansible/ansible
```
To update the system's package index
```
$ sudo apt-get update
```
install ansible software
```
$ sudo apt-get install ansible
```
to verify installation and the version
```
$ ansible --version
```


NEXT,
set up the inventory file
The inventory file contains information about the hosts (the Vms) we intend to manage with ansible.
the default ansible inventory path is /etc/ansible/hosts,hence,inventories are stored in it.
```
sudo nano /etc/ansible/hosts
```

NEXT,
create SSH passwordless connection between the ansible control server and the target host.hsbsjkc






 
