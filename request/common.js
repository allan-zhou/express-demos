var http = require('http');
var querystring = require('querystring');

//加密
function Encipher(hostname, data, callback) {
    var postData = { mode: 1, input: JSON.stringify(data) };

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
    req.write(querystring.stringify(postData));
    req.end();
}

//解密
function Decipher(hostname, data, callback) {
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
        var responseData = "";
        res.on('data', function (chun) {
            responseData = chun;
        });
        res.on('end', function () {
            callback(null, responseData)
        });
    });
    req.on('error', function (err) {
        console.log("err");
    });
    req.write(querystring.stringify(postData));
    req.end();
}

// query
function Query(hostname, apikey, data, callback) {
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
    req.write(data);
    req.end();
}

// invoke
function Invoke(hostname, apikey, data, callback) {
    var options = {
        hostname: hostname,
        port: 9143,
        path: '/tomago/v2/blockchain/invoke',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Enrollment-Id': apikey,
            'API-Key': apikey,
        }
    }
    
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
    req.write(data);
    req.end();
}

exports.Encipher = Encipher;
exports.Decipher = Decipher;
exports.Query = Query;
exports.Invoke = Invoke;