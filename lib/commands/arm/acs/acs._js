/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
'use strict';

var fs = require('fs');
var profile = require('../../../util/profile');
var utils = require('../../../util/utils');
var certUtils = require('../../../util/certUtils');
var $ = utils.getLocaleString;

exports.init = function (cli) {
  var containerServiceScale = cli.category('acs')
  .description($('Commands to manage your container service.  '));
  containerServiceScale.command('scale [resource-group] [name] [new-agent-count]')
  .description($('The operation to scale a container service.'))
  .usage('[options] <resource-group> <name> <new-agent-count>')
  .option('-g, --resource-group <resource-group>', $('resource-group'))
  .option('-n, --name <name>', $('name'))
  .option('-o, --new-agent-count <new-agent-count>', $('New agent count'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, newAgentCount, options, _) {
    if (!resourceGroup) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
    }

    cli.output.verbose('resource-group = ' + resourceGroup);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!newAgentCount) {
      newAgentCount = cli.interaction.promptIfNotGiven($('new-agent-count : '), newAgentCount, _);
    }

    cli.output.verbose('new-agent-count = ' + newAgentCount);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var acs = computeManagementClient.containerServiceOperations.get(resourceGroup, name, _);
    if(newAgentCount == acs.agentPoolProfiles[0].count){
      throw new Error('New agent count should be greater than existing count.');
    }
    acs.agentPoolProfiles[0].count = parseInt(newAgentCount);
    var result = computeManagementClient.containerServiceOperations.createOrUpdate(resourceGroup, name, acs , _);
    if (result) {
      cli.output.json(result);
    }
  });
    
  var containerServiceScale = cli.category('acs')
  .description($('Commands to manage your container service.  '));
  containerServiceScale.command('quick-create [resource-group] [name] [location] [orchestrator] [master-count] [agent-count] [username] [ssh-publickey-file] [os-Type] [dns-prefix]')
  .description($('The operation to create container service with default resources in resource group.'))
  .usage('[options] <resource-group> <name> <location> <orchestrator> <master-count> <agent-count> <username> <ssh-publickey-file> <os-Type> <dns-prefix>')
  .option('-g, --resource-group <resource-group>', $('The resource group name'))
  .option('-n, --name <name>', $('The container service name'))
  .option('-l, --location <location>', $('location'))
  .option('-o, --orchestrator <orchestrator>', $('The type of orchestrator [DCOS, Swarm]'))
  .option('-m, --master-count <master-count>', $('The number of masters(1, 3 or 5) for the cluster.'))
  .option('-a, --agent-count <agent-count>', $('The number of agents(1-100) for the cluster.'))
  .option('-u, --username <username>', $('User Name'))
  .option('-O, --os-Type <os-Type>', $('The operating system Type.Currently, it supports linux.'))
  .option('-S, --ssh-publickey-file <ssh-publickey-file>', $('The path to public key file for SSH authentication.'))
  .option('-v, --vm-size <vm-size>', $('The size of agent virtual machine.'))
  .option('-d, --dns-prefix <dns-prefix>', $('The DNS name prefix for masters and agents.'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(resourceGroup, name, location, orchestrator, masterCount, agentCount, username, sshPublickeyFile, osType, dnsPrefix, options, _) {
    resourceGroup = cli.interaction.promptIfNotGiven($('Resource group name: '), resourceGroup, _);
    name = cli.interaction.promptIfNotGiven($('Container Service name: '), name, _);
    location = cli.interaction.promptIfNotGiven($('Location name: '), location, _);
    orchestrator = cli.interaction.promptIfNotGiven($('orchestrator Type [DCOS, Swarm]: '), orchestrator, _);
    masterCount = cli.interaction.promptIfNotGiven($('Number of masters(1, 3 or 5): '), masterCount, _);
    agentCount = cli.interaction.promptIfNotGiven($('Number of agents(1-100): '), agentCount, _);
    username = cli.interaction.promptIfNotGiven($('User Name: '), username, _);
    sshPublickeyFile = cli.interaction.promptIfNotGiven($('Path to public key file: '), sshPublickeyFile, _);
    osType = cli.interaction.promptIfNotGiven($('Operating system Type: '), osType, _);
    dnsPrefix = cli.interaction.promptIfNotGiven($('DNS name prefix: '), dnsPrefix, _);
    var subscription = profile.current.getSubscription(options.subscription);
    
    var osType = osType.toLowerCase();
    if(osType === 'windows')
    {
      throw new Error('Currently, It does not support Windows operating system.');
    }
    
    // create resource group if not exists
    var resourceManagementClient = utils.createResourceClient(subscription);
    var response = resourceManagementClient.resourceGroups.list({}, _);
    var rgList = response.resourceGroups;
    var found = false;
    for (var index in rgList) {
      if (rgList[index].name === resourceGroup) {
        found = true;
      }
    }
    
    if (found === false) {
      var rgParams = { location : location };
      resourceManagementClient.resourceGroups.createOrUpdate(resourceGroup, rgParams, _);
    }
    
    //Set Default VM size for agent virtal machine.
    if(!options.vmSize)
    {
      options.vmSize = 'Standard_D2';
    }
    
    //Read sshPublickey file
    var sshPublickey = fs.readFileSync(sshPublickeyFile);
    var sshPublickeyPemStr = sshPublickey.toString();
    
    var params = {"orchestratorProfile":{"orchestratorType":""},"masterProfile":{"count":null,"dnsPrefix":""},"agentPoolProfiles":[{"name":"agentpools","count":null,"vmSize":"","dnsPrefix":""}],"linuxProfile":{"adminUsername":"","ssh":{"publicKeys":[{"keyData":""}]}},"diagnosticsProfile":{"vmDiagnostics":{"enabled":true,"storageUri":null}},"name":"","type":"Microsoft.ContainerService/ContainerServices","location":""};
    params.orchestratorProfile.orchestratorType = orchestrator;
    params.masterProfile.count = parseInt(masterCount);
    params.masterProfile.dnsPrefix = dnsPrefix + 'mgmt';
    params.agentPoolProfiles[0].count = parseInt(agentCount);
    params.agentPoolProfiles[0].vmSize = options.vmSize;
    params.agentPoolProfiles[0].dnsPrefix = dnsPrefix + 'agents';
    params.linuxProfile.adminUsername = username;
    params.linuxProfile.ssh.publicKeys[0].keyData = sshPublickeyPemString;
    params.name = name;
    params.location = location;
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.containerServiceOperations.createOrUpdate(resourceGroup, name, params, _);
    if (result) {
      cli.output.json(result);
    }
  });
};