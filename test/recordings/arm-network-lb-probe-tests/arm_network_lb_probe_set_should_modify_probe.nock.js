// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"49891e0b-dda5-40c9-8065-eb54b07d595c"',
  'x-ms-request-id': 'f4a3f69a-5c5c-4fe2-906d-10db421f2109',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': 'e0efeb5e-8238-49e5-8876-e6813ee3342b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081813Z:e0efeb5e-8238-49e5-8876-e6813ee3342b',
  date: 'Thu, 21 May 2015 08:18:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"49891e0b-dda5-40c9-8065-eb54b07d595c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"49891e0b-dda5-40c9-8065-eb54b07d595c"',
  'x-ms-request-id': 'f4a3f69a-5c5c-4fe2-906d-10db421f2109',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': 'e0efeb5e-8238-49e5-8876-e6813ee3342b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081813Z:e0efeb5e-8238-49e5-8876-e6813ee3342b',
  date: 'Thu, 21 May 2015 08:18:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': '19181c76-f964-41bf-a566-eb5c4f6ec967',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081816Z:19181c76-f964-41bf-a566-eb5c4f6ec967',
  date: 'Thu, 21 May 2015 08:18:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"231cd932-d226-406a-90ac-5bf2428a397b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': '19181c76-f964-41bf-a566-eb5c4f6ec967',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081816Z:19181c76-f964-41bf-a566-eb5c4f6ec967',
  date: 'Thu, 21 May 2015 08:18:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11c33c9a-259e-4ae0-8f35-c9ed7e64253e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '5c6fbfff-16d4-4dae-ba1c-c39ccc2f4a9e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081817Z:5c6fbfff-16d4-4dae-ba1c-c39ccc2f4a9e',
  date: 'Thu, 21 May 2015 08:18:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/377b8bbf-fe4e-40a6-8edb-1c94ad2e6fcb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11c33c9a-259e-4ae0-8f35-c9ed7e64253e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '5c6fbfff-16d4-4dae-ba1c-c39ccc2f4a9e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081817Z:5c6fbfff-16d4-4dae-ba1c-c39ccc2f4a9e',
  date: 'Thu, 21 May 2015 08:18:17 GMT',
  connection: 'close' });
 return result; }]];