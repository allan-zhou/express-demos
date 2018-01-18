var http = require('http');
var async = require('async');
var common = require('./common');

var API_KEY = "_L0NETQMp1516111227";

function func1(callback) {
    var payloadData = {
        payload: {
            chaincode_id: "transfer",
            args: ["query", "e"]
        }
    }
    common.Encipher("192.168.1.217", payloadData, callback)

}
function func2(arg1, callback) {
    common.Query("192.168.1.185", API_KEY, arg1, callback)
}
function func3(arg1, callback) {
    common.Decipher('192.168.1.217', arg1, callback)
}


var start = Date.now();

var times = 200;
for (let index = 1; index <= times; index++) {
    console.log(index);
    async.waterfall([
        func1,
        func2,
        func3,
    ], function (err, result) {
        console.log(Buffer.from(result).toString());
        if (index == times && result) {
            var interval = Date.now() - start;
            console.log("total interval:" + interval);
        }

    });
}