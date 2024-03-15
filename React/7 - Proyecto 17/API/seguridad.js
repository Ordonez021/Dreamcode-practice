//hasing 

const bcrypt = require('bcrypt');
const ciclos = 10;
const salt = bcrypt.genSaltSync(ciclos);

//ENCRIPTACION  
const crypto = require('crypto');
const algoritmo = 'aes-128-gcm';
const iv = crypto.randomBytes(16);

//TOKEN
const jwt = require('jsonwebtoken');
const claveSecreta = "mi_clave_segura";

function miHash(password) {
    //hace hashing de la contraseña con el salt generado
    const claveConHash = bcrypt.hashSync(password, salt);
    return claveConHash;
}

function miEncriptado(dato) {
    //crear un objeto de cifrado
    const cifrado = crypto.createCipheriv(algoritmo,password,iv);
    //cifrar el texto plano
    let encriptado = cifrado.update(dato, 'utf-8' , 'hex');
    encriptado += cifrado.final('hex');
    return encriptado;
}

function crearToken(user_id, email) {
    const carga = {
        usuario_id: user_id,
        user: email
    }
    //generar el JWT
    const token = jwt.sign(carga,claveSecreta, {expiresIn: '1h'});
    return token;

    
}

function validarToken(request, res, next){
    const token = request.headers.authorization;

    //verificar y decodificar el token 
    try {
        const decodificado = jwt.verify(token.split(' ')[1], claveSecreta);
        request.user = decodificado;
        next();
    } catch (error) {
        return res.status(401).send('Token de autenticacion invalido');
    }
}



module.exports = {miHash, miEncriptado,crearToken,validarToken};
