let express = require('express');
let app = express();

let auth = (req, res, next) => {
    console.log('都要经过我吗？');
    next();
}

app.get('/', [auth], (req, res) => {
    res.send('get from Home');
});

app.post('/', [auth], (req, res) => {
    res.send('post from Home');
});

app.listen(8080);
