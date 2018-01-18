var http = require('http');
var async = require('async');
var cipher = require('./cipher');


var start = Date.now();
async.waterfall([
    func1,
    func2,
    func3,
], function (err, result) {
    console.log(Buffer.from(result).toString());

    var interval = Date.now() - start;
    console.log("total interval:" + interval);
    
});
function func1(callback) {
    var payloadData = {
        payload: {
            chaincode_id: "transfer",
            args: ["query", "d"]
        }
    }
    // Encipher("192.168.1.217", payloadData, callback)
    cipher.Encipher("192.168.1.217", payloadData, callback)
    
}
function func2(arg1, callback) {
    Query("192.168.1.185", API_KEY, arg1, callback)
}
function func3(arg1, callback) {
    // Decipher('192.168.1.217', arg1, callback)
    cipher.Decipher('192.168.1.217', arg1, callback)
}