var express = require('express');
var app = express();

//路由路径方式：字符串

//匹配根路由
app.get('/',(req, res)=>{
    res.send('root');
});

//匹配 /about 
app.get('/about',(req, res) => {
    res.send('about');
});

//匹配 /random.text
app.get('/random.text',(req, res) => {
    res.send('random.text');    
});


app.listen(8080);