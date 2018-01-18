var request = require('request');
var querystring = require('querystring');
var fs = require('fs');

var API_KEY = "_L0NETQMp1516111227";

var payloadData = {
    payload: {
        chaincode_id: "transfer",
        args: ["query", "a"]
    }
}

var postData = {
    mode: 1,
    input: JSON.stringify(payloadData)
};

request.post({ url: 'http://localhost:8080', form: postData }, function (error, response, body) {
    console.log(response.statusCode);
    console.log(body);

    request.post({
        url: 'http://192.168.1.185:9143/tomago/v2/blockchain/query',
        headers:[{
            name: 'content-type',
            value: 'application/json'
          },{
            name: 'Enrollment-Id',
            value: API_KEY
          },{
            name: 'API-Key',
            value: API_KEY
          }],
          form: body
    }, function (error, response, body) {
        console.log(response.statusCode);
        console.log(body);

    })
})


var options = {
    url: 'http://localhost:8080',
    method: 'POST',
    form: postData
};

function callback(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
        console.log(body);
        TMPDATA = body;
    }
}

// request(options, callback);
