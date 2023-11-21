const fs = require('fs');
const request = require('request');

const REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
const MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'
/*
let requestBody = {
  dest: <string>, // <bytes> (base64 encoded)
  dest_string: <string>, // <string> 
  amt: <string>, // <int64> 
  amt_msat: <string>, // <int64> 
  payment_hash: <string>, // <bytes> (base64 encoded)
  payment_hash_string: <string>, // <string> 
  payment_request: <string>, // <string> 
  final_cltv_delta: <integer>, // <int32> 
  fee_limit: <object>, // <FeeLimit> 
  outgoing_chan_id: <string>, // <uint64> 
  last_hop_pubkey: <string>, // <bytes> (base64 encoded)
  cltv_limit: <integer>, // <uint32> 
  dest_custom_records: <object>, // <DestCustomRecordsEntry> 
  allow_self_payment: <boolean>, // <bool> 
  dest_features: <array>, // <FeatureBit> 
  payment_addr: <string>, // <bytes> (base64 encoded)
};
*/
let options = {
  url: `https://${REST_HOST}/v1/channels/transaction-stream`,
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
//    "payment_error": <string>, // <string> 
//    "payment_preimage": <string>, // <bytes> 
//    "payment_route": <object>, // <Route> 
//    "payment_hash": <string>, // <bytes> 
//  }



// --------------------------
// Example with websockets:
// --------------------------
const WebSocket = require('ws');
const fs = require('fs');

const REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
const MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'

let ws = new WebSocket(`wss://${REST_HOST}/v1/channels/transaction-stream?method=POST`, {
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  headers: {
    'Grpc-Metadata-Macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
});
/*
let requestBody = {
  dest: <bytes>, // <bytes> (base64 encoded)
  dest_string: <string>, // <string> 
  amt: <int64>, // <int64> 
  amt_msat: <int64>, // <int64> 
  payment_hash: <bytes>, // <bytes> (base64 encoded)
  payment_hash_string: <string>, // <string> 
  payment_request: <string>, // <string> 
  final_cltv_delta: <int32>, // <int32> 
  fee_limit: <FeeLimit>, // <FeeLimit> 
  outgoing_chan_id: <uint64>, // <uint64> 
  last_hop_pubkey: <bytes>, // <bytes> (base64 encoded)
  cltv_limit: <uint32>, // <uint32> 
  dest_custom_records: <DestCustomRecordsEntry>, // <DestCustomRecordsEntry> 
  allow_self_payment: <bool>, // <bool> 
  dest_features: <FeatureBit>, // <FeatureBit> 
  payment_addr: <bytes>, // <bytes> (base64 encoded)
};
*/
ws.on('open', function() {
    ws.send(JSON.stringify(requestBody));
});
ws.on('error', function(err) {
    console.log('Error: ' + err);
});
ws.on('message', function(body) {
    console.log(body);
});
// Console output:
//  {
//    "payment_error": <string>, // <string>
//    "payment_preimage": <string>, // <bytes>
//    "payment_route": <object>, // <Route>
//    "payment_hash": <string>, // <bytes>
//  }