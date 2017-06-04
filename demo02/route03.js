let express = require('express');
// import AppRoute from './routes/AppRoute';
// import UserRoute from './routes/UserRoute';
// import BlogRoute from './routes/BlogRoute';
let AppRoute = require('./routes/AppRoute');

let app = express();

app.use('/demo', AppRoute);

app.listen(8080);