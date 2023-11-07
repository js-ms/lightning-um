const fs = require('fs');
const request = require('request');

const REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
const MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'

let options = {
  url: `https://${REST_HOST}/v1/graph/node/{pub_key}`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
}
request.get(options, function(error, response, body) {
  console.log(body);
});
// Console output:
//  {
//    "node": <object>, // <LightningNode> 
//    "num_channels": <integer>, // <uint32> 
//    "total_capacity": <string>, // <int64> 
//    "channels": <array>, // <ChannelEdge> 
//  }