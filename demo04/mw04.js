var express = require('express');
var app = express();

app.use(express.static('assets'));
app.use('/assets', express.static('assets'));

app.listen(8080);