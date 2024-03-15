const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dr34mc0d3',
    database: 'universidades'
});
  
conexion.connect(function (error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});
 
module.exports = { conexion };