function error(err, req, res, next) {
    // console.log(err.stack);

    err.status = err.status || 500;

    res.status(err.status);

    res.format({
        html: function () {
            res.render('500', { error: err })
        },
        json: function () {
            res.json({
                error: {
                    status: err.status,
                    message: err.message || 'Internal Server Error'
                }
            })
        },
        default: function () {
            res.type('txt').send('Internal Server Error')
        }
    })
}

module.exports = error;