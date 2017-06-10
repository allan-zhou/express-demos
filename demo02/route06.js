var express = require('express');
var path = require('path');
var app = express();


var pic = path.resolve(__dirname, '../assets/zhouxch.jpg')
console.log(pic);

//下载文件
app.get('/download/a', (req, res) => {
    res.download(pic)
});
app.get('/download/b', (req, res) => {
    res.download(pic, 'test.jpg')
});

//结束响应进程
app.get('/', (req, res) => {
    res.end();
});

//发送json响应
app.get('/json/a', (req, res) => {
    res.json({ user: 'zhoujl' });
})
app.get('/json/b', (req, res) => {
    res.status(500).json({ error: 'message' });
})

//重定向请求
app.get('/redirect/a',(req, res) => {
    res.redirect('/json/a');
})
app.get('/redirect/b',(req, res) => {
    res.redirect('http://www.baidu.com');
})
app.get('/redirect/c',(req, res) => {
    res.redirect(301, 'http://www.baidu.com')
});
app.get('/redirect/d',(req, res) => {
    res.redirect('..');
});
app.get('/redirect/e',(req, res) => {
    res.redirect('back');
});


app.listen(8080);