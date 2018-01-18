var http = require('http');
var querystring = require('querystring');

var API_KEY = "_L0NETQMp1516111227";
var CIPHER_DATA = "";

//发送 http Post 请求  


// console.log(querystring.stringify(postData));


// HTTP_CODE=`curl -k -o "$RESULT_FILE" -s -w %{http_code} -XGET ${ADDR}/tomago/v2/blockchain/transaction/"$TRANS_ID" -H "Enrollment-Id: $API_KEY"`; echo



function Encipher(hostname, payloadData) {
    var postData = {
        mode: 1,
        input: JSON.stringify(payloadData)
    };

    var options = {
        hostname: hostname,
        port: 8080,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    }

    var req = http.request(options, function (res) { 
        res.setEncoding('utf-8');
        res.on('data', function (chun) {
            // console.log('body分隔线---------------------------------\r\n');  
            console.info(chun);
            CIPHER_DATA = chun
            Query("192.168.1.185", API_KEY)
        });
        res.on('end', function () {
            console.log('end Encipher.********');
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.write(querystring.stringify(postData));
    req.end();
}

function Query(hostname, apikey) {
    var options = {
        hostname: hostname,
        port: 9143,
        path: '/tomago/v2/blockchain/query',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Enrollment-Id': apikey
        }
    }
    
    var req = http.request(options, function (res) {
        // res.setEncoding('utf-8');
        res.on('data', function (chun) {
            console.info(chun);
            CIPHER_DATA = chun

            console.log(Buffer.from(chun).toString());

            Decipher('192.168.1.217',chun)
            // Decipher("localhost", Buffer.from(chun).toString())
        });
        res.on('end', function () {
            console.log('end Query.********');
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.end();
}

function Decipher(hostname, payloadData) {
    var options = {
        hostname: hostname,
        port: 8080,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(payloadData)
        }
    }

    var req = http.request(options, function (res) { 
        res.setEncoding('utf-8');
        res.on('data', function (chun) {
            console.info(chun);
            CIPHER_DATA = chun
        });
        res.on('end', function () {
            console.log('end Decipher.********');
        });
    });
    req.on('error', function (err) {
        console.error(err);
    });
    req.write(querystring.stringify(payloadData));
    req.end();
}

function main() {
    var payloadData = {
        payload: {
            chaincode_id: "transfer",
            args: ["query", "a"]
        }
    }

    Encipher("192.168.1.217", payloadData)

    // console.log(CIPHER_DATA);

    // Query("192.168.1.185", API_KEY)

    // console.log(CIPHER_DATA);

}

main()