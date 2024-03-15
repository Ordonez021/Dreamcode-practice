//para generar el token para hacer la autenticacion instalamos la libreria => npm install jsonwebtoken

const { response } = require('express');
const jwt = require('jsonwebtoken');
const claveSecreta = "esta_es_una_clave_para_token";



function crearToken(idUsuario,usuario) {
    
    //almacenar la informacion en un objet
    const informacion = {
        usuario_id: idUsuario,
        usuario: usuario
    }

    //generamos el json web token

    const token = jwt.sign(informacion,claveSecreta,{expiresIn: '1h'});
    return token;
}

//funcion validar token para el validate 
function validarToken(request, response, next ) {
    //obtener el token del encabezado de autorizacion
    const token = request.headers.authorization;

    //verificar y codificar el token 
    try {
        const decodificado = jwt.verify(token.split(' ')[1], claveSecreta);
        request.user = decodificado;
        next();
    } catch (error) {
        return response.status(401).send('token de autenticacion invalido');
    }
}


//exportamos para poder usar en index
module.exports = { crearToken , validarToken };