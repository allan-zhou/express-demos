var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log(Date.now());
    console.log(req.originalUrl);
    next();
})

app.use('/user/:id',(req, res, next) => {
    console.log(Date.now());
    console.log(req.params);
    console.log(req.params.name);
    console.log(req.params[0]);
    console.log(req.params.id);
    next();
})

app.get('/user/:id',(req, res,next) => {
    res.send('user/:id')
});

//不会命中
app.get('/user/:id',(req, res) => {
    res.send('我也是 user/:id')
});


app.listen(8080);