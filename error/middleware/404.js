function notfound(req, res, next) {
    res.status(404);

    res.format({
        html: function () {
            res.render('404', { url: req.url })
        },
        json: function () {
            res.json({
                error: {
                    status: 404,
                    message:'Not found'
                }
            })
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
}

module.exports = notfound;