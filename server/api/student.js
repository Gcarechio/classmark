
var api = {}
var pool = require('../config/database');

api.addStudent = function(req, res) {

    var sql = "INSERT INTO Aluno (NUSP, nome, email, senha, curso) VALUES ( " + 
        req.body.student.NUSP + ", '" +
        req.body.student.nome + "', '" +
        req.body.student.email + "', '" +
        req.body.student.senha + "', '" +
        req.body.student.curso + "')";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao inserir dado na tabela Aluno');
            throw err;
        }
        return true;
    });
};

api.getStudents = function(req, res) {
    var sql = "SELECT * FROM Aluno";

    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao selecionar dado na tabela Aluno');
            throw err;
        }
        return res.json(rows);
    });
};

api.update = function(req, res) {
    var sql = "UPDATE Aluno SET nome = '" + req.body.student.nome +
        "', email = '" + req.body.student.email +
        "', senha = '" + req.body.student.senha +
        "', curso = '" + req.body.student.curso +
        "' WHERE NUSP = " + req.params.NUSP + ";";
    
    pool.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Falha ao atualizar dado na tabela Aluno');
            throw err;
        }
        return res.json(rows);
    });
};

module.exports = api;