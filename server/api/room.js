
var api = {}
var pool = require('../config/database');

api.addRoom = function(req, res) {

    var sql = "INSERT INTO Cadeira (idLugar, turma, NUSP_ocupante, numeroSala) VALUES ( " + 
        req.body.chair.idLugar + ", '" +
        req.body.chair.turma + "', " +
        req.body.chair.NUSP_ocupante + ", '" +
        req.body.chair.numeroSala + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Cadeira');
            throw err;
        }
        return true;
    });
};

api.getRooms = function(req, res) {
    var sql = "SELECT * FROM Cadeira";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Cadeira');
            throw err;
        }
        return res.json(rows);
    });
};

api.update = function(req, res) {
    var sql = "UPDATE Cadeira SET NUSP_ocupante = " + req.body.chair.NUSP_ocupante +
        ", numeroSala = '" + req.body.chair.numeroSala +
        "' WHERE idLugar = " + req.params.idLugar + 
        " AND turma = '" + req.params.turma + "' ;";
    
    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao atualizar dado na tabela Cadeira');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;