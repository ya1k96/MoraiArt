const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El usuario es requerido"]
    },
    usuario: {
        type: String,
        required: [true, "Ingresa un usuario"]
    },
    contrasena: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Ingresa un correo"]
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)