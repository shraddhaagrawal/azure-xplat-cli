// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '11ab620b-0001-0045-24b5-b14b96000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '11ab620b-0001-0045-24b5-b14b96000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2855')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:57 GMT',
  etag: '"0x8D37FCC9D5247BD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9406159e-0001-0028-03b5-b1e1b8000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2855')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:57 GMT',
  etag: '"0x8D37FCC9D5247BD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9406159e-0001-0028-03b5-b1e1b8000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/appendblobname2855?comp=appendblock', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  etag: '"0x8D37FCC9D908B47"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4aeeb1c7-0001-0030-4bb5-b1cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-blob-append-offset': '0',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/appendblobname2855?comp=appendblock', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  etag: '"0x8D37FCC9D908B47"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4aeeb1c7-0001-0030-4bb5-b1cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-blob-append-offset': '0',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2855?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92af30bc-0001-000f-38b5-b17bf1000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2855?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92af30bc-0001-000f-38b5-b17bf1000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '138e862b-0001-003d-1db5-b12321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '138e862b-0001-003d-1db5-b12321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '10917d44-0001-001b-16b5-b1b895000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2855')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:58 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9DC5A6BB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '10917d44-0001-001b-16b5-b1b895000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Thu, 19 May 2016 10:01:58 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['appendblobname2855'];};