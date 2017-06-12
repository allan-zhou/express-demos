var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
  res.send('api from /user/list')
});

router.get('/:id', function(req, res) {
  res.send('api from /user/:id')
});

module.exports = router;