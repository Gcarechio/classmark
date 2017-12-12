module.exports  = function(app) {
    var api = app.api.teacher;

    app.route('/api/teachers')
        .get(api.getTeachers)
        .post(api.addTeacher);

    app.put('/api/teachers/:NUSP', api.update);
};