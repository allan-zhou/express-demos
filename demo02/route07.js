let express = require('express');
// import AppRoute from './routes/AppRoute';
// import UserRoute from './routes/UserRoute';
// import BlogRoute from './routes/BlogRoute';
let AppRoute = require('./routes/AppRoute');
let BlogRoute = require('./routes/BlogRoute')
let UserRoute = require('./routes/UserRoute')

let app = express();

app.use('/', AppRoute);
app.use('/blog', BlogRoute);
app.use('/user', UserRoute);

app.listen(8080);