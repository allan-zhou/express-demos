var express = require('express');
var app = express();

var mylogger = (req, res, next) => {
    console.log('logger');
    next();
};

var requestTime = (req, res, next) => {
    req.Time = new Date().toLocaleString();
    console.log(req.Time);
    next();
};

app.use(requestTime);
app.use(mylogger);


app.get('/', (req, res) => {
    var responseText = `hello world! \n requestTime at:${req.Time}`;

    res.send(responseText);
});

app.listen(8080);