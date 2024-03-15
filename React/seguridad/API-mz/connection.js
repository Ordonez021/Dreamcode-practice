const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'seguridad'
});

connection.connect(function(error){
    if(error) throw error;
    console.log('conexion establecida');
})

module.exports = {connection};