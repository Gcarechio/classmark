module.exports = function(uri, user, password) {
    var mysql      = require('mysql');

    var connection = mysql.createConnection({
        host     : uri,
        user     : user,
        password : password
    });
      
    connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
    console.log('connected as id ' + connection.threadId);
    console.log('Conectado ao MySQL');
    });

    process.on('SIGINT', function() {
        connection.end(function(err) {
            console.log('Conexão fechada pelo término da aplicação');
            process.exit(0);
        });
    });
}


