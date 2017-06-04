let express = require('express');
let router = express.Router();

router.get('/user',(req, res, next) => {
   res.send('Get from /user'); 
});

router.get('/user/list',(req, res, next) => {
   res.send('Get from /user/list'); 
});

module.exports = router;