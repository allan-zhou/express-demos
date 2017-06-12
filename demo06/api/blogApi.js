var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
  res.send('api from /blog/list')
});

router.get('/:id', function(req, res) {
  res.send('api from /blog/:id')
});

module.exports = router;