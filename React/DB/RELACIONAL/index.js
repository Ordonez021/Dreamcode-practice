// configuramos con express el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

// llamr al componente de mysql
var mysql = require('mysql');


// establecer los parametros de la conexion

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'universidad'
});


//nos conectamos con la base
connection.connect();

//agregar un nuevo registro 
//connection.query() siempre para consultas
connection.query('INSERT INTO estudiantes (nombre,curso) VALUES ( "' + pedido.body.nombre + '", "' + pedido.body.email + '" )',function(error,resultado){
    if(error) throw error;
    console.log(resultado)

});
// //  realizar la consulta a la tabla 
// connection.query('SELECT * FROM cliente',function(error,filas){
//     if(error) throw error;
//     console.log(filas)
// });

// // modificacion de registro
// connection.query('UPDATE cliente SET genero = 0, telefono = 123234 WHERE identificador = 1', function(error,resultado){
//     if(error) throw error;
//     console.log(resultado)
// });

// connection.query('SELECT * FROM cliente',function(error,filas){
//     if(error) throw error;
//     console.log(filas)
// });


// //eliminar un registro
// connection.query('DELETE FROM cliente WHERE identificador = 1', function(error,resultado){
//     if(error) throw error;
//     console.log(resultado)
// });


// //  realizar la consulta a la tabla 
// connection.query('SELECT * FROM cliente',function(error,filas){
//     if(error) throw error;
//     console.log(filas)
// });


// // asegurarse que poner al final de  las consultas un pedido que la conexion finalise para evitar consumir recursos;

connection.end();