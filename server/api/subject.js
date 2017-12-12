
var api = {}
var pool = require('../config/database');

api.addSubject = function(req, res) {

    var sql = "INSERT INTO Materia (sigla, turma, creditos) VALUES ( '" + 
        req.body.subject.sigla + "', '" +
        req.body.subject.turma + "', " +
        req.body.subject.creditos + ")";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Materia');
            throw err;
        }
        return true;
    });
};

api.getSubjects = function(req, res) {
    var sql = "SELECT * FROM Materia";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Materia');
            throw err;
        }
        return res.json(rows);
    });
};

api.update = function(req, res) {
    var sql = "UPDATE Materia SET creditos = " + req.body.subject.creditos +
        " WHERE sigla = '" + req.params.sigla + 
        "' AND turma = '" + req.params.turma + "' ;";
    
    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao atualizar dado na tabela Materia');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;