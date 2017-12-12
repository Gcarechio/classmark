module.exports  = function(app) {
    var api = app.api.chair;

    app.route('/api/chairs')
        .get(api.getChairs)
        .post(api.addChair);

    app.put('/api/chairs/:idLugar/:turma', api.update);
};