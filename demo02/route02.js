let express = require('express');
let app = express();
let router = express.Router();

router.use('/blog', (req, res, next) => {
    console.log('log at:' + new Date().toLocaleString());
    next();
});


router.route('/blog')
    .all((req, res, next) => {
        console.log('都要触发我的吗？');
        next();
    })
    .get((req, res, next) => {
        res.send('get from /blog');
    })
    .post((req, res, next) => {
        res.send('post from /blog');
    })
    .put((req, res, next) => {
        res.send('put from /blog');
    });

app.use('/', router);

app.listen(8080);
