module.exports  = function(app) {
    var api = app.api.faz;

    app.route('/api/faz')
        .get(api.getFaz)
        .post(api.addFaz);
};