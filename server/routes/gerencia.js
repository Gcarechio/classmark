module.exports  = function(app) {
    var api = app.api.gerencia;

    app.route('/api/gerencia')
        .get(api.getGerencia)
        .post(api.addGerencia);
};