const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const error = require('./middleware/500.js');
const notfound = require('./middleware/404.js');

// general config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.enable('DEVP');
if ('production' == app.settings.env) app.disable('DEVP');

// Routes
app.get('/', (req, res) => {
    res.send('home');
})

app.get('/403', (req, res, next) => {
    var err = new Error('403 禁止访问');
    err.status = 403;
    next(err);
})

app.get('/404', (req, res, next) => {
    next();
})

app.get('/500', (req, res) => {
    throw new Error('报错啦');
})

// 错误处理放在其它router后面
app.use(notfound);
app.use(error);

// start server
app.listen(port, () => {
    console.log(`server start at : ${port}`);
});

