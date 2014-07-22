var express     = require('express');
var env         = require('./config/env');

var app = express();

// Configure the app environment.
env(app);

module.exports = app;
