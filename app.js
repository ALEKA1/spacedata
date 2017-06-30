var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config/config')
var clientRouter = require('./routes/routes-client');
var apiRouter = require('./routes/routes-api');

var app = express();

/**
 * View engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
app.use('/', clientRouter);
app.use('/api', apiRouter);

/**
 * 404 Error handling
 *
 * Catch 404 and forward to error handler.
 *
 * @param {Request}  req
 * @param {Response} res
 * @param {Error}    next
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 *
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.expressPort, function () {
  console.log(`App listening on port ${config.expressPort}`)
})

module.exports = app;
