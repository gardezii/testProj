var express       = require('express');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
const routes      = require('./routes/v1/index.js');

const { responseHandler } = require('./utils');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// amazon-cognito-identity-js is a js library meant for web browser and uses fetch function
// nodejs don’t have fetch in built we have to emulate it like that
global.fetch = require('node-fetch');

app.use('/api/v1', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  responseHandler.errorResponse(res, 404, 'API not found!', 'Requested API does not exist.')
})

module.exports = app;
