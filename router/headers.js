let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


app.get('/users', (req, res) => {
    
    console.log("req.headers =================");
    console.log(req.headers);
    console.log("req.body =================");
    console.log(req.body);
    res.send('get /users');
});

app.post('/users', (req, res) => {
    console.log("req.method =================");
    console.log(req.method);
    console.log("req.headers =================");
    console.log(req.headers);
    console.log("req.body =================");
    console.log(req.body);    

    res.send('post /users');
});

app.listen(3000,() => {
    console.log("app start at 3000");
});
