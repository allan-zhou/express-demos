let express = require('express');
let router = express.Router();

router.get('/blog',(req, res, next) => {
   res.send('Get from /blog'); 
});

router.get('/blog/list',(req, res, next) => {
   res.send('Get from /blog/list'); 
});


module.exports = router;