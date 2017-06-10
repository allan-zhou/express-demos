var express = require('express');
var app = express();


//单个回调函数可以处理一个路由
app.get('/example/a', (req, res) => {
    res.send('hello from A!');
});

//多个回调函数可以处理一个路由，确保制定next
app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function!');
    next();
}, (req, res) => {
    res.send('hello from B!')
});

//一组回调函数，可以处理一个路由
c0 = (req, res, next) => {
    console.log('c0');
    next();
}
c1 = (req, res, next) => {
    console.log('c1');
    next();
}
c2 = (req, res) => {
    res.send('hello from C!')
}
app.get('/example/c', [c0, c1, c2]);

//独立函数与一组函数的组合，可以处理一个路由
app.get('/example/d',[c0,c1],(req, res,next) => {
    console.log('the response will be sent by the next function!');
    next();
},(req, res) => {
    res.send('hello from D!')
});

app.listen(8080);