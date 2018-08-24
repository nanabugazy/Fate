var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var path = require('path');

// export function

module.exports = function(server, express) {

    // view engine setup
    server.set('views', path.join(__dirname, '../views'));
    server.set('view engine', 'jade');

    //bring in environment variables
    require('dotenv').load();
    // [SH] Bring in the data model
    require(path.join(process.cwd(), '/api/models/db'));
    // [SH] Bring in the Passport config after model is defined
    require(path.join(process.cwd(), '/api/config/passport'));

    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());

    // [SH] Initialise Passport before using the route middleware
    server.use(passport.initialize());

    //Pull in angular client to server
    server.use(express.static(path.join(process.cwd(), '../client/dist')));

}