var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('hello', { title: 'hello', message: 'hello pug!' });
});

app.listen(8080);