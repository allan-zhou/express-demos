let express = require('express');
let router = express.Router();

let UserRoute = require('./UserRoute');
let BlogRoute = require('./BlogRoute');

router.get('/',(req, res, next) => {
   res.send('Get from /'); 
});

module.exports = router;
module.exports = UserRoute;
module.exports = BlogRoute;