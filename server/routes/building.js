module.exports  = function(app) {
    var api = app.api.building;

    app.route('/api/buildings')
        .get(api.getBuildings)
        .post(api.addSBuilding);

    app.put('/api/buildings/:CEP', api.update);
};