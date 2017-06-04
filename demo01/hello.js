const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

const server = app.listen(8080, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`server start at ${host}:${port}`);
});