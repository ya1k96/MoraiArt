const mongoose = require('mongoose')

let Participantes = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "Campo requerido"]
        },
        rol: {
            type: String,
            required: true
        }, 
    }
)

module.exports = mongoose.model('Participantes', Participantes)