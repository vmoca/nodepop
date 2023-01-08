var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Anuncio = require('./models/Anuncio');

require('./lib/connectMongoose');
require('./routes/apiv1/anuncios');

var app = express();

app.locals.title ='Nodepop';
app.locals.subtitle ='Tu API de anuncios';
app.locals.filter_ads ='Filtrar anuncios';
app.locals.tags_page ='Tags disponibles';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * API Routes
 */
app.use('/apiv1/anuncios', require('./routes/apiv1/anuncios'));

/**
 * Website routes
 */

app.use('/', function(req, res, next) {
  console.log('recibo una petición');
  next();
})

app.use('/',      require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // check if is a validation error
  if (err.array) {
    err.status = 422;
    const errorInfo = err.array({ onlyFirstError: true})[0];
    console.log(errorInfo);
    err.message = `Error in ${errorInfo.location}, param "${errorInfo.param}" ${errorInfo.msg}`;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if(req.originalUrl.startsWith('/apiv1/')) {
    res.json({ error: err.message });
    return;
  }
  res.render('error');
});

module.exports = app;
