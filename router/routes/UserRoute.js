let express = require('express');
let router = express.Router();

router.get('/',(req, res) => {
   res.send('Get from /user'); 
});

router.get('/list',(req, res, next) => {
   res.send('Get from /user/list'); 
});

module.exports = router;