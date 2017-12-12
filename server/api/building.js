
var api = {}
var pool = require('../config/database');

api.addBuilding = function(req, res) {

    var sql = "INSERT INTO Predio (CEP, nome, endereco) VALUES ( '" + 
        req.body.building.CEP + "', '" +
        req.body.building.nome + "', '" +
        req.body.building.endereco + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Predio');
            throw err;
        }
        return true;
    });
};

api.getBuildings = function(req, res) {
    var sql = "SELECT * FROM Predio";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Predio');
            throw err;
        }
        return res.json(rows);
    });
};

api.update = function(req, res) {
    var sql = "UPDATE Predio SET nome = '" + req.body.building.nome +
        "', endereco = '" + req.body.building.endereco +
        "' WHERE CEP = '" + req.params.CEP + "';";
    
    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao atualizar dado na tabela Predio');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;