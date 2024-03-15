const express = require('express');
const app = express();

const mysql = require('./conexion');

app.use(express.json());


app.get("./estudiantes/:legajo", (pedido,respuesta) => {
    mysql.connection.query('SELECT * FROM estudiantes WHERE legajo = ' + pedido.params.legajo, function(error,resultados){
        if(error) throw error;
        respuesta.send(resultados);
    })
})
