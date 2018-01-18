var http = require('http');
var querystring = require('querystring');

var API_KEY = "_L0NETQMp1516111227";

function Encipher(hostname, data) {
    var postData = { mode: 1, input: JSON.stringify(data)};

    var options = {
        hostname: hostname,
        port: 8080,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    var req = http.request(options, function (res) { 
        var responseData = "";

        var start = Date.now();
        res.on('data', function (chun) {
            // console.log(chun.toString());
            responseData = chun;
        });

        res.on('end', function () {
            var interval  = Date.now() - start;
            console.log('end Encipher:' + interval);

            Query("192.168.1.185", API_KEY ,responseData)
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.write(querystring.stringify(postData));
    req.end();
}

function Query(hostname, apikey, data) {
    var options = {
        hostname: hostname,
        port: 9143,
        path: '/tomago/v2/blockchain/query',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Enrollment-Id': apikey,
            'API-Key': apikey,
        }
    }
    
    var req = http.request(options, function (res) {
        var responseData = "";
        var start = Date.now();

        res.on('data', function (chun) {
            responseData = chun;
        });
        res.on('end', function () {
            var interval  = Date.now() - start;
            console.log('end Query:' + interval);

            Decipher('192.168.1.217',responseData)
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.write(data);
    req.end();
}

function Decipher(hostname, data) {
    var postData = {
        mode: 2,
        input: decodeURIComponent(data)
    };

    var options = {
        hostname: hostname,
        port: 8080,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    var req = http.request(options, function (res) { 
        var start = Date.now();

        res.on('data', function (chun) {
            console.log(chun.toString());
        });
        res.on('end', function () {
            var interval  = Date.now() - start;
            console.log('end Decipher:' + interval);
        });
    });
    req.on('error', function (err) {
        console.log("err");
    });
    req.write(querystring.stringify(postData));
    req.end();
}


var payloadData = {
    payload: {
        chaincode_id: "transfer",
        args: ["query", "d"]
    }
}

Encipher("192.168.1.217", payloadData)
