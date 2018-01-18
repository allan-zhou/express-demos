let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Get from /blog ')
})

router.get('/types',(req, res) => {
   res.send('Get from /blog/types'); 
});

router.get('/details',(req, res) => {
   res.send('Get from /blog/details'); 
});

module.exports = router;