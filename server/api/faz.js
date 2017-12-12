
var api = {}
var pool = require('../config/database');

api.addFaz = function(req, res) {

    var sql = "INSERT INTO Faz (NUSP, sigla, turma) VALUES ( " + 
        req.body.faz.NUSP + ", '" +
        req.body.faz.sigla + "', '" +
        req.body.faz.turma + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Faz');
            throw err;
        }
        return true;
    });
};

api.getFaz = function(req, res) {
    var sql = "SELECT * FROM Faz";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Faz');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;