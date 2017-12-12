
var api = {}
var pool = require('../config/database');

api.addGerencia = function(req, res) {

    var sql = "INSERT INTO Gerencia (NUSP, sigla, turma) VALUES ( " + 
        req.body.faz.NUSP + ", '" +
        req.body.faz.sigla + "', '" +
        req.body.faz.turma + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Gerencia');
            throw err;
        }
        return true;
    });
};

api.getGerencia = function(req, res) {
    var sql = "SELECT * FROM Gerencia";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Gerencia');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;