const express = require('express');
const path = require('path');
const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// app.get('/', (req, res, next) => {

// })

app.post('/submit', (req, res, next) => {
    const form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);


        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('received upload:\n\n');
        res.end(util.inspect({ fields: fields, files: files }));

    });

})

// start server
app.listen(port, () => {
    console.log(`server start at : ${port}`);
});

