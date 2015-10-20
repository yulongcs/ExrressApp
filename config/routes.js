var routes = require('../app/routes/index');
var users = require('../app/routes/users');

module.exports = function(app) {
    app.use('/', routes);
    app.use('/users', users);
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    // no stacktraces leaked to user unless in development environment
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: (app.get('env') === 'development') ? err : {}
        });
    });
}