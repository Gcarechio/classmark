module.exports  = function(app) {
    var api = app.api.abriga;

    app.route('/api/abriga')
        .get(api.getAbriga)
        .post(api.addAbriga);
};