module.exports  = function(app) {
    var api = app.api.student;

    app.route('/api/students')
        .get(api.getStudents)
        .post(api.addStudent);

    app.put('/api/students/:NUSP', api.update);
};