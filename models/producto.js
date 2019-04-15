const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    tipo: {
        type: String,
        required: [true, 'Tipo requerido']
    },
    precio: {
        type: Number,
        required:[true, 'Precio requerido']
    },
    stock: {
        type: Number,
        required:[true, 'Stock requerido']
    },
    ult_abast: {
        type: Date,
        default: Date.now
    },
    img_src: {
        type: String,
        default: '../../../assets/img/productos/NOIMG.png'
    }
})

module.exports = mongoose.model('Producto', ProductoSchema)