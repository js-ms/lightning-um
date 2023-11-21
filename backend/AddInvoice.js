const fs = require('fs');
const request = require('request');

const REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
const MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'

let requestBody = {

}

let optionsAddInvoice = {
  url: `https://${REST_HOST}/v1/invoices`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
  form: JSON.stringify(requestBody),
}
request.post(optionsAddInvoice, function(error, response, body) {
  console.log(body);
});

let channelBalance = {
  url: `https://${REST_HOST}/v1/balance/channels`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
}
request.get(channelBalance, function(error, response, body) {
  console.log(body);
});

let sendPayment = {
  url: `https://${REST_HOST}/v1/channels/transaction-stream`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
  form: JSON.stringify(requestBody),
}
request.post(sendPayment, function(error, response, body) {
  console.log(body);
});

