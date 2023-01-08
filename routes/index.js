var express = require('express');
const Anuncio = require('../models/Anuncio');
var router = express.Router();
const { query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', (req, res, next) => {
  Anuncio.find({}, function(err, anuncios) {
    res.locals.bienvenida = 'Welcome';
    res.locals.type = 'Tipo: ';
    res.locals.sale = 'En venta';
    res.locals.buy = 'Busco';
    res.locals.price = 'Precio: ';
    res.locals.tags = 'Tags: ';
    res.render('index', {
      anunciosList: anuncios
    })
  })
});

module.exports = router;
