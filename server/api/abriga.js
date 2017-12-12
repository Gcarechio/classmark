
var api = {}
var pool = require('../config/database');

api.addAbriga = function(req, res) {

    var sql = "INSERT INTO Abriga (sigla, turma, numeroSala) VALUES ( '" + 
        req.body.abriga.sigla + "', '" +
        req.body.abriga.turma + "', '" +
        req.body.abriga.numeroSala + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Abriga');
            throw err;
        }
        return true;
    });
};

api.getAbriga = function(req, res) {
    var sql = "SELECT * FROM Abriga";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Abriga');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;