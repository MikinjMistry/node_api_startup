var express = require('express');
var router = express.Router();

var users = require('./users');
router.use('/user', users);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
