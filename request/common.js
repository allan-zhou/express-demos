var http = require('http');
var querystring = require('querystring');
var config = require('./config');

// Encipher/Decipher request options
function getCipherRequestOptions(){
    return {
        hostname: config.cipher_server_ip,
        port: config.cipher_server_port,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
}

// Query/Invoke to tomago request options
// type: query | invoke
function getTomagoRequestOptions(type){
    return {
        hostname: config.tomago_server_ip,
        port: config.tomago_server_port,
        path: '/tomago/v2/blockchain/' + type,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Enrollment-Id': apikey,
            'API-Key': config.API_KEY
        }
    }
}

// request
function doRequest(options, postData, callback){
    var req = http.request(options, function (res) {
        var responseData = "";
        res.on('data', function (chun) {
            responseData = chun;
        });
        res.on('end', function () {
            callback(null, responseData);
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    if(postData){
        req.write(postData);
    }
    req.end();
}


/* 
 * Expose Method 
 */

// Encipher
function Encipher(data, callback) {
    var postData = { mode: 1, input: JSON.stringify(data) };

    doRequest(getCipherRequestOptions(), querystring.stringify(postData), callback)
}

// Decipher
function Decipher(data, callback) {
    var postData = {
        mode: 2,
        input: decodeURIComponent(data)
    };

    doRequest(getCipherRequestOptions(), querystring.stringify(postData), callback)
}

// Query
function Query(data, callback) {
    doRequest(getTomagoRequestOptions('query'), data, callback)
}

// Invoke
function Invoke(data, callback) {
    doRequest(getTomagoRequestOptions('invoke'), data, callback)
}


exports.Encipher = Encipher;
exports.Decipher = Decipher;
exports.Query = Query;
exports.Invoke = Invoke;