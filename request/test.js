var request = require('request');
var querystring = require('querystring');

var API_KEY = "_L0NETQMp1516111227";

var payloadData = {
    payload: {
        chaincode_id: "transfer",
        args: ["query", "d"]
    }
}

var postData = {
    mode: 1,
    input: JSON.stringify(payloadData)
};

request.post("http://localhost:3000/users", {
    har:{
        method: "POST",
        headers: [
            {
                name: "Content-Type",
                value: "application/x-www-form-urlencoded",
            },
            {
                name: "Enrollment-Id",
                value: API_KEY
            }
        ],
        postData: {
            mimeType: "application/x-www-form-urlencoded",
            params: [
                {
                  name: 'foo',
                  value: 'bar'
                },
                {
                  name: 'hello',
                  value: 'world'
                }
              ]
        }
    }
}, (error, response, body) => {
    console.log(body);
})
