// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-request-id': '0a1c33bc-e137-4817-a2e3-521f58756820',
  'x-ms-correlation-request-id': '0a1c33bc-e137-4817-a2e3-521f58756820',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110103Z:0a1c33bc-e137-4817-a2e3-521f58756820',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:02 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-request-id': '0a1c33bc-e137-4817-a2e3-521f58756820',
  'x-ms-correlation-request-id': '0a1c33bc-e137-4817-a2e3-521f58756820',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110103Z:0a1c33bc-e137-4817-a2e3-521f58756820',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:02 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet\",\"name\":\"xplatTestGCreatevnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-request-id': 'efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'x-ms-correlation-request-id': 'efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110106Z:efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet\",\"name\":\"xplatTestGCreatevnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-request-id': 'efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'x-ms-correlation-request-id': 'efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110106Z:efd53a50-ae8a-4695-83f0-300ced6aa7ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/xplatTestVnet' under resource group 'xplatTestGCreatevnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '15c0ac5c-d420-4563-a221-bb9f1652b504',
  'x-ms-correlation-request-id': '15c0ac5c-d420-4563-a221-bb9f1652b504',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110108Z:15c0ac5c-d420-4563-a221-bb9f1652b504',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:07 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/xplatTestVnet' under resource group 'xplatTestGCreatevnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '15c0ac5c-d420-4563-a221-bb9f1652b504',
  'x-ms-correlation-request-id': '15c0ac5c-d420-4563-a221-bb9f1652b504',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110108Z:15c0ac5c-d420-4563-a221-bb9f1652b504',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:01:07 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"48b06ae8-da70-459c-b69b-8b7879e267ba\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '698',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1169',
  'x-ms-correlation-request-id': '9fc31650-f084-4824-8b3d-d0129d81d044',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110116Z:9fc31650-f084-4824-8b3d-d0129d81d044',
  date: 'Tue, 29 Dec 2015 11:01:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"48b06ae8-da70-459c-b69b-8b7879e267ba\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '698',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1169',
  'x-ms-correlation-request-id': '9fc31650-f084-4824-8b3d-d0129d81d044',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110116Z:9fc31650-f084-4824-8b3d-d0129d81d044',
  date: 'Tue, 29 Dec 2015 11:01:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '740b1805-c105-4eb4-b007-5aa7e84aa891',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14910',
  'x-ms-correlation-request-id': '93d7116a-1c2d-447d-9abc-334c29101413',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110127Z:93d7116a-1c2d-447d-9abc-334c29101413',
  date: 'Tue, 29 Dec 2015 11:01:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8c30ac12-dbbb-4d76-9aeb-629a1e8ac44d?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '740b1805-c105-4eb4-b007-5aa7e84aa891',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14910',
  'x-ms-correlation-request-id': '93d7116a-1c2d-447d-9abc-334c29101413',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110127Z:93d7116a-1c2d-447d-9abc-334c29101413',
  date: 'Tue, 29 Dec 2015 11:01:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"cfc013de-80e0-4951-9b17-fd6ee1bd6a49\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '699',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cfc013de-80e0-4951-9b17-fd6ee1bd6a49"',
  'x-ms-request-id': '43361af1-a062-44ab-90d6-ee3ab1132fa3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '47fa6eb1-af5e-4f15-bff9-c56c6f1ab85e',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110129Z:47fa6eb1-af5e-4f15-bff9-c56c6f1ab85e',
  date: 'Tue, 29 Dec 2015 11:01:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"cfc013de-80e0-4951-9b17-fd6ee1bd6a49\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '699',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cfc013de-80e0-4951-9b17-fd6ee1bd6a49"',
  'x-ms-request-id': '43361af1-a062-44ab-90d6-ee3ab1132fa3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '47fa6eb1-af5e-4f15-bff9-c56c6f1ab85e',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110129Z:47fa6eb1-af5e-4f15-bff9-c56c6f1ab85e',
  date: 'Tue, 29 Dec 2015 11:01:29 GMT',
  connection: 'close' });
 return result; }]];