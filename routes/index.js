var express = require('express');
var router = express.Router();
const { query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.bienvenida = 'Welcome';

  res.render('index', { version: 1.0 });
});

module.exports = router;
