const fs = require('fs');
const request = require('request');

const REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
const MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'

let requestBody = {
  memo: <string>, // <string> 
  hash: <string>, // <bytes> (base64 encoded)
  value: <string>, // <int64> 
  value_msat: <string>, // <int64> 
  description_hash: <string>, // <bytes> (base64 encoded)
  expiry: <string>, // <int64> 
  fallback_addr: <string>, // <string> 
  cltv_expiry: <string>, // <uint64> 
  route_hints: <array>, // <RouteHint> 
  private: <boolean>, // <bool> 
};
let options = {
  url: `https://${REST_HOST}/v2/invoices/hodl`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
  form: JSON.stringify(requestBody),
}
request.post(options, function(error, response, body) {
  console.log(body);
});
// Console output:
//  {
//    "payment_request": <string>, // <string> 
//    "add_index": <string>, // <uint64> 
//    "payment_addr": <string>, // <bytes> 
//  }