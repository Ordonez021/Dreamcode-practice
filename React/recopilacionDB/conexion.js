const mysql = require('mysql');

//creamos la conexion

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'universidad'
});

conexion.connect(function(error){
    if(error) throw error;
    console.log('la conexion se establecio exitosamente')
});


module.exports = { conexion };