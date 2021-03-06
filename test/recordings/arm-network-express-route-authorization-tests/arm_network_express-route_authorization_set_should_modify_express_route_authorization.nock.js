// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e35eb01-cc39-4d19-8a4f-7e2adb0cf175\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"test-auth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n        \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"c08697a8-a901-4ab2-8c9f-3db4f6a2d23e\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1565',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '326bf722-dfb0-4f9b-bac4-a3835e395097',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'baf14541-e441-4901-9b3c-ae8b7fac66ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133620Z:baf14541-e441-4901-9b3c-ae8b7fac66ca',
  date: 'Tue, 17 May 2016 13:36:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5e35eb01-cc39-4d19-8a4f-7e2adb0cf175\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"test-auth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n        \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"c08697a8-a901-4ab2-8c9f-3db4f6a2d23e\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1565',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '326bf722-dfb0-4f9b-bac4-a3835e395097',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'baf14541-e441-4901-9b3c-ae8b7fac66ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133620Z:baf14541-e441-4901-9b3c-ae8b7fac66ca',
  date: 'Tue, 17 May 2016 13:36:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '70ab950e-ef8a-4925-a311-5e12151f5952',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '8ec44931-edb9-432c-b53c-0154acf5f639',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133622Z:8ec44931-edb9-432c-b53c-0154acf5f639',
  date: 'Tue, 17 May 2016 13:36:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"3c37dc62-6cd1-4feb-8e76-50ddcb8c8adb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '70ab950e-ef8a-4925-a311-5e12151f5952',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '8ec44931-edb9-432c-b53c-0154acf5f639',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133622Z:8ec44931-edb9-432c-b53c-0154acf5f639',
  date: 'Tue, 17 May 2016 13:36:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"873785bd-2651-44d1-bc0c-0ae6fc39c048\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"308201B006092A864886F70D010703A08201A13082019D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D010101050004820100B8AC9564E1A191360816290905B1EB9668F7EB369FD8FD3E8CF363CF80810E2997BD898FD4437CAD52F483CD471E8A773A3B1127F7E5E989159AC35F899A387A2EF4A80EA8838E7FEA65E0884F64A10A5434962B3FC7FE3C0F5A2097C6D88926C226B02D6D078C43171B3F5B347DDC0C78BCE85FA437DABFF6610FFF5D0DEA6A5ED90AEC1EFD8BBA5E5B347CEC2FD2CA85BA0146220C965EB2E5A36A7C301D0A457D57B1BF8166E45942ADA0B0BDB3AE20DD88078D5057EC272CA9A03639AF74B85CF008167A2A28949A2749ABFDEFF69C570E7651A3FEE1AE31267413999700BF4FB82330C0A18C5DAEDD419567323DD472AC1DB87B2C5F5083CB580FA062E4304B06092A864886F70D010701301406082A864886F70D0307040893591E149B8007E2802872F334FD2406F0CE2C3499E76C5828658F4BE1ECA86DB5895564E177395EF796239C36BF8E1EE95A\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1296',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6ce63d3c-8658-4659-b4de-7be047aa6a6c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ce63d3c-8658-4659-b4de-7be047aa6a6c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c8141222-e3ef-4d64-9e1a-85aa0e4440b2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133624Z:c8141222-e3ef-4d64-9e1a-85aa0e4440b2',
  date: 'Tue, 17 May 2016 13:36:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"873785bd-2651-44d1-bc0c-0ae6fc39c048\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"308201B006092A864886F70D010703A08201A13082019D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D010101050004820100B8AC9564E1A191360816290905B1EB9668F7EB369FD8FD3E8CF363CF80810E2997BD898FD4437CAD52F483CD471E8A773A3B1127F7E5E989159AC35F899A387A2EF4A80EA8838E7FEA65E0884F64A10A5434962B3FC7FE3C0F5A2097C6D88926C226B02D6D078C43171B3F5B347DDC0C78BCE85FA437DABFF6610FFF5D0DEA6A5ED90AEC1EFD8BBA5E5B347CEC2FD2CA85BA0146220C965EB2E5A36A7C301D0A457D57B1BF8166E45942ADA0B0BDB3AE20DD88078D5057EC272CA9A03639AF74B85CF008167A2A28949A2749ABFDEFF69C570E7651A3FEE1AE31267413999700BF4FB82330C0A18C5DAEDD419567323DD472AC1DB87B2C5F5083CB580FA062E4304B06092A864886F70D010701301406082A864886F70D0307040893591E149B8007E2802872F334FD2406F0CE2C3499E76C5828658F4BE1ECA86DB5895564E177395EF796239C36BF8E1EE95A\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1296',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6ce63d3c-8658-4659-b4de-7be047aa6a6c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ce63d3c-8658-4659-b4de-7be047aa6a6c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c8141222-e3ef-4d64-9e1a-85aa0e4440b2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133624Z:c8141222-e3ef-4d64-9e1a-85aa0e4440b2',
  date: 'Tue, 17 May 2016 13:36:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"873785bd-2651-44d1-bc0c-0ae6fc39c048\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '07121071-2bcf-4909-b9cc-34a735ada036',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'd5e40573-3fb8-460f-bc71-ec5c24868b9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133625Z:d5e40573-3fb8-460f-bc71-ec5c24868b9e',
  date: 'Tue, 17 May 2016 13:36:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"873785bd-2651-44d1-bc0c-0ae6fc39c048\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"9c3b0cce-68d9-407b-acf5-41cee11f54b0\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '07121071-2bcf-4909-b9cc-34a735ada036',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'd5e40573-3fb8-460f-bc71-ec5c24868b9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T133625Z:d5e40573-3fb8-460f-bc71-ec5c24868b9e',
  date: 'Tue, 17 May 2016 13:36:25 GMT',
  connection: 'close' });
 return result; }]];