const mongoose = require('mongoose');
//creamos un objeto para el modelo de la base datos
const Users = mongoose.model('User', {
    name:{type: String, required: true},
    lastname:{type: String, required: true},
})

module.exports = Users;