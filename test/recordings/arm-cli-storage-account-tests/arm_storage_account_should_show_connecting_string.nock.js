// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East US 2 (Stage)';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup110/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5743/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"eBZx+IEAQ+U2DT/7cfDAmAVCInDAoCqTlVFnVWhjFXF2t0yOAt+g5xi6jeZu4mFll7GowpIUYXGYA9oy8QLWBg==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"BBtGmdxD7/gNDJbivoxJlo7V9BMxjA2Q5egrA1B2ryJMBoGuiDjQTh4JVJxoFyKlFSs23xX7PzEQntPoxuFmZQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'd7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T062624Z:d7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 06:26:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup110/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5743/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"eBZx+IEAQ+U2DT/7cfDAmAVCInDAoCqTlVFnVWhjFXF2t0yOAt+g5xi6jeZu4mFll7GowpIUYXGYA9oy8QLWBg==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"BBtGmdxD7/gNDJbivoxJlo7V9BMxjA2Q5egrA1B2ryJMBoGuiDjQTh4JVJxoFyKlFSs23xX7PzEQntPoxuFmZQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'd7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T062624Z:d7c0b48a-7225-4ec5-a81d-c1a220ae78e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 06:26:24 GMT',
  connection: 'close' });
 return result; }]];