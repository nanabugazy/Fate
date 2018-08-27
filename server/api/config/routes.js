var path = require('path');
// [SH] Bring in the routes for the API (delete the default routes)
var routesApi = require(path.join(__dirname, '../routes/index'));

// export object
module.exports = function(server, express){

    //Use server and client separately
    var indexRouter = require('../routes/index_default');
    server.use('/', indexRouter);

    // [SH] Use the API routes when path starts with /api
    server.use('/api', routesApi);
}