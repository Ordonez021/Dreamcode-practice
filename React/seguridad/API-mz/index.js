const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mysql = require("./connection");
const seguridad = require("./segurirad");

app.post("/login", (pedido,response)=>{
    const query =`SELECT Id FROM usuarios WHERE user = ? AND pass = ?`;
    const values = [pedido.body.user,pedido.body.pass];
    mysql.connection.query(query,values, function(error,resultado){
        if(error) throw error;
        if(resultado.length === 0){
            response.send(undefined);
        }else{
            response.send(seguridad.crearToken(resultado[0]['id'], pedido.body.user));
        }
    });

});

//validar el validate de la function validar
app.post("/validate", seguridad.validarToken, (pedido, response)=>{
    let query = 'SELECT p.page FROM permisos p JOIN permisosxusuario u ON u.permiso_id = p.id WHERE u.usuario_id = ? AND p.name = ?';
    let value = [pedido.user.usuario_id,pedido.body.permiso_id]
    mysql.connection.query(query, value,function(error,resultado){
        if(error) throw error;
        if(resultado.length == 0){
                response.send(undefined);
        }else{
            response.send(resultado[0]['page']);
        }
    });
});



// app.post("/login" , (pedido,response)=>{
//     mysql.connection.query( 'SELECT COUNT(*) AS existe FROM usuarios WHERE user = "'+pedido.body.user+'" AND pass = "'+pedido.body.pass+'"', function(reject,result){
//         if(reject) throw reject;
//         response.send(result[0])
//     })
// })

app.set('port', 3000);
app.listen(3000, ()=>{
    console.log('el servidor esta en linea ');
})