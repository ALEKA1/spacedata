/**
 * Deps
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * App
 */
var app = express();
var config = require('./config/config');
var apiVersion = 1;

/**
 * Models
 */
// var planet = db.import(__dirname + '/src/models/planet');

/**
 * Routing
 */
var apiRouter = require('./src/routes/api');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
app.use('/api/v'+ apiVersion, apiRouter);

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
  res.json({
    status: 500,
    message: err.message
  });

  next();
});

app.listen(config.expressPort, function () {
  console.log(`App listening on port ${config.expressPort}`)
})

module.exports = app;
