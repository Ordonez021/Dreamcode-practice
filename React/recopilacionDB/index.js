const express = require('express');
const app = express();

//corremos la api en el puerto 3000 para usarlo en postman
app.set('port', 3000);
app.listen(3000);

//hacemos que express se llama como tipo de dato json
app.use(express.json());

//llamamos al archivo conexion que lo exportamos de module
const mySQL = require("./conexion");


//mostrar la tabla de estudiantes 
app.get("/estudiantes/:legajo", (pedido,response)=>{
    mySQL.conexion.query("SELECT * FROM estudiante WHERE legajo = " + pedido.params.legajo, function(reject,result){
        if(reject) throw reject;
        response.send(result);
    });
});

//agregar un estudiante
app.post("/estudiantes/create", (pedido,response)=>{
    mySQL.conexion.query('INSERT INTO estudiante (legajo,nombre,email) VALUES ( "'+pedido.body.legajo+'","'+pedido.body.nombre+'","'+pedido.body.email+'")',function(reject,result){
        if(reject) throw reject;
        response.send("se agrego el estudiante: ");
    });
});

//agregar nota
app.post("/notas/create" , (pedido , response)=>{
    mySQL.conexion.query('INSERT INTO examen (codigo_curso, legajo_estudiante, nota , fecha)' + 
    'VALUES ( "'+ pedido.body.curso + '", "'+ pedido.body.estudiante + '","'+ pedido.body.nota+ '","'+ pedido.body.fecha+'")', function(reject , result){
        if(reject) throw reject;
        response.send('se añadio id: '+  result.insertId);
    });
});

//METODO ACTUALIZAR

// app.put("/notas/:id/update", (pedido , response)=>{
//     mySQL.conexion.query('UPDATE examen SET codigo_curso = "'+ pedido.body.curso +'" ' +
//     ', legajo_estudiante = ' +pedido.body.estudiante +
//     ', nota = ' + pedido.body.nota + 
//     ', fecha =  "'+ pedido.body.fecha +'" ' +
//     'WHERE id = ' + pedido.params.id,function(reject , result){
//         if(reject) throw reject;
//         response.send('examen modificado');
//     });
// });






//eliminar 

app.delete("/estudiante/:legajo/delete" , (pedido,response)=>{
    mySQL.conexion.query('DELETE FROM estudiante WHERE legajo = ' + pedido.params.legajo,function(reject,result){
        if(reject) throw reject;
        response.send(result);
    });
});

//mostrar aprobados
app.get("/notas/:codigo/aprobados", (pedido,response)=>{
    mySQL.conexion.query('SELECT * FROM examen WHERE codigo_curso = "' + pedido.params.codigo + '" AND nota > 5' , function(reject,result){
        if(reject) throw reject;
        response.send(result)
    })
})


app.put('/notas/:id/update', (pedido , response)=>{
    mySQL.conexion.query('UPDATE examen SET codigo_curso = "'+ pedido.body.curso +'" ' +
    'WHERE id = ' + pedido.params.id,function(reject , result){
        if(reject) throw reject;
        response.send('modificado correctamente');
    });
});
