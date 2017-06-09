var express = require('express');
var app = express();

//路由路径方式：字符串模式

// ?  匹配前面表达式0次或者1次
//匹配 /acd 或者 /abcd
// app.get('/ab?cd',(req, res) => {
//     res.send('ab?cd');
// });


// +  匹配前面表达式1次或者多次
//匹配 /abcd 或者 /abbcd
// app.get('/ab+cd',(req, res) => {
//     res.send('ab+cd');
// });

// *  匹配任意单个或多个字符
//匹配 /abcd 或者 /abxcd 或者 /ab123cd
// app.get('/ab*cd',(req, res) => {
//     res.send('ab*cd');
// });

// (x)? 其中，x为任意单个或多个字符，匹配其0次或者1次
//匹配 /abe 或者 /abcde
app.get('/ab(cd)?e',(req, res) => {
    res.send('ab(cd)?e');
});


app.listen(8080);