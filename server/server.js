var path = require('path');
var express = require('express');

// start express
var server = express();

// set middleware
require('./api/config/middleware.js')(server, express);

// set routes
require('./api/config/routes.js')(server, express);

// set helpers
require('./api/config/helpers.js')(server, express);

module.exports = server;
