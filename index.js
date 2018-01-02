const key = "";
const secKey = "";

const Client = require('coinbase').Client;

const client = new Client({'apiKey': key, 'apiSecret': secKey});

const promise = new Promise((resolve, reject)=>{
    client.getHistoricPrices({'currencyPair': 'LTC-GBP'}, function(err, obj) {
        resolve(obj);
    });
});

promise.then(obj=>{
    console.log(JSON.stringify(obj,null,2));
});
