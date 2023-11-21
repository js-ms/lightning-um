BY acastano90931
----------------------------------------------------------------
REST_HOST = 'bitcoin-um.t.voltageapp.io:8080'
MACAROON_PATH = '/home/almarales/btc/certificates/admin.macaroon'
----------------------------------------------------------------

https://lightning.engineering/api-docs/api/lnd/lightning/add-invoice

REST
HTTP Method	Path
POST	/v1/invoices

https://lightning.engineering/api-docs/api/lnd/lightning/channel-balance

REST
HTTP Method	Path
GET	/v1/balance/channels

https://lightning.engineering/api-docs/api/lnd/lightning/send-payment

REST
HTTP Method	Path
POST	/v1/channels/transaction-stream
