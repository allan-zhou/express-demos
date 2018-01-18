let express = require('express');
let router = express.Router();

router.get('/',(req, res, next) => {
   res.send('Get from App /'); 
});

module.exports = router;