// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'dadd366e-7df4-4de2-a1a1-58c135461e31',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ab79f545-8b3e-4776-8d2b-1214e7950f59',
  'x-ms-routing-request-id': 'WESTUS:20160322T191838Z:ab79f545-8b3e-4776-8d2b-1214e7950f59',
  date: 'Tue, 22 Mar 2016 19:18:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'dadd366e-7df4-4de2-a1a1-58c135461e31',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ab79f545-8b3e-4776-8d2b-1214e7950f59',
  'x-ms-routing-request-id': 'WESTUS:20160322T191838Z:ab79f545-8b3e-4776-8d2b-1214e7950f59',
  date: 'Tue, 22 Mar 2016 19:18:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0fa58d3e-5c39-4b16-b7bc-5039de0823f7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '38fb1b83-34a3-41b3-a652-762935f3dd3e',
  'x-ms-routing-request-id': 'WESTUS:20160322T191909Z:38fb1b83-34a3-41b3-a652-762935f3dd3e',
  date: 'Tue, 22 Mar 2016 19:19:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0fa58d3e-5c39-4b16-b7bc-5039de0823f7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '38fb1b83-34a3-41b3-a652-762935f3dd3e',
  'x-ms-routing-request-id': 'WESTUS:20160322T191909Z:38fb1b83-34a3-41b3-a652-762935f3dd3e',
  date: 'Tue, 22 Mar 2016 19:19:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'ea866d7a-d81e-4a54-b431-6b839a899b88',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7133471e-e5bb-44dd-ad58-be779f466c98',
  'x-ms-routing-request-id': 'WESTUS:20160322T191940Z:7133471e-e5bb-44dd-ad58-be779f466c98',
  date: 'Tue, 22 Mar 2016 19:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'ea866d7a-d81e-4a54-b431-6b839a899b88',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7133471e-e5bb-44dd-ad58-be779f466c98',
  'x-ms-routing-request-id': 'WESTUS:20160322T191940Z:7133471e-e5bb-44dd-ad58-be779f466c98',
  date: 'Tue, 22 Mar 2016 19:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '020211d5-b371-4532-8dba-58d4b67b2208',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2b2813f0-17ff-491f-845a-aa28df98a782',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192011Z:2b2813f0-17ff-491f-845a-aa28df98a782',
  date: 'Tue, 22 Mar 2016 19:20:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '020211d5-b371-4532-8dba-58d4b67b2208',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2b2813f0-17ff-491f-845a-aa28df98a782',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192011Z:2b2813f0-17ff-491f-845a-aa28df98a782',
  date: 'Tue, 22 Mar 2016 19:20:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'a3416ba5-3b12-476c-9fdf-12c81845e107',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '94373217-30bb-4dfa-9577-467853ba6935',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192042Z:94373217-30bb-4dfa-9577-467853ba6935',
  date: 'Tue, 22 Mar 2016 19:20:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'a3416ba5-3b12-476c-9fdf-12c81845e107',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '94373217-30bb-4dfa-9577-467853ba6935',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192042Z:94373217-30bb-4dfa-9577-467853ba6935',
  date: 'Tue, 22 Mar 2016 19:20:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\",\r\n  \"endTime\": \"2016-03-22T19:20:50.9430623+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '517a54f7-3d6d-403a-b8a0-19b8e0548329',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'aaed1370-ed78-450c-8f3f-66b66af40bd7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192111Z:aaed1370-ed78-450c-8f3f-66b66af40bd7',
  date: 'Tue, 22 Mar 2016 19:21:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/dadd366e-7df4-4de2-a1a1-58c135461e31?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"dadd366e-7df4-4de2-a1a1-58c135461e31\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T19:18:37.3822816+00:00\",\r\n  \"endTime\": \"2016-03-22T19:20:50.9430623+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '517a54f7-3d6d-403a-b8a0-19b8e0548329',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'aaed1370-ed78-450c-8f3f-66b66af40bd7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T192111Z:aaed1370-ed78-450c-8f3f-66b66af40bd7',
  date: 'Tue, 22 Mar 2016 19:21:11 GMT',
  connection: 'close' });
 return result; }]];