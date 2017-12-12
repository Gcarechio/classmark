
var api = {}
var pool = require('../config/database');

api.addTeacher = function(req, res) {

    var sql = "INSERT INTO Professor (NUSP, nome, email, senha, departamento) VALUES ( " + 
        req.body.teacher.NUSP + ", '" +
        req.body.teacher.nome + "', '" +
        req.body.teacher.email + "', '" +
        req.body.teacher.senha + "', '" +
        req.body.teacher.departamento + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Professor');
            throw err;
        }
        return true;
    });
};

api.getTeachers = function(req, res) {
    var sql = "SELECT * FROM Professor";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Professor');
            throw err;
        }
        return res.json(rows);
    });
};

api.update = function(req, res) {
    var sql = "UPDATE Professor SET nome = '" + req.body.teacher.nome +
        "', email = '" + req.body.teacher.email +
        "', senha = '" + req.body.teacher.senha +
        "', departamento = '" + req.body.teacher.departamento +
        "' WHERE NUSP = " + req.params.NUSP + ";";
    
    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao atualizar dado na tabela Professor');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;