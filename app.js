var express     = require('express');
var env         = require('./config/env');

var routes = require('./routes/index');
var recipe = require('./routes/recipe');

var app = express();

// Configure the app environment.
env(app);

// Route definition
app.use('/', routes);
app.use('/recipe', recipe);

module.exports = app;
