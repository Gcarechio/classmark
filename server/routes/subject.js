module.exports  = function(app) {
    var api = app.api.subject;

    app.route('/api/subjects')
        .get(api.getSubjects)
        .post(api.addSubject);

    app.put('/api/subjects/:sigla/:turma', api.update);
};