module.exports  = function(app) {
    var api = app.api.room;

    app.route('/api/rooms')
        .get(api.getRooms)
        .post(api.addRoom);

    app.put('/api/rooms/:numeroSala', api.update);
};