const {mongoClient} = require("mongodb");
const client = new mongoClient("");



//desarrollar una funcion con la base de datos y retornar el objeto que contiens la conexiomn

const conexionDB = () => {
    return client.connect()
    .then((dbClient) => {return dbClient})
    .catch((error) => {return error})
}


//exportar para otro  modulo 
module.exports = {conexionDB}
