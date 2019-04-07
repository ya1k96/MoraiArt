const ctrl = { }
const Usuario = require('../models/usuario')
const crypto = require('crypto')

ctrl.addUser = async (req, res) => {
    let body = req.body

    /* Verificar Usuario */
    let existUser = await Usuario.findOne({ "usuario": body.usuario })
    if( existUser ) {
        return res.status(401)
        .json({ ok: false, message: "Este nombre de usuario ya existe"})
    }

    /* Verificar Email */
    let existEmail = await Usuario.findOne({ "email": body.email })
    if( existEmail ) {
        return res.status(401)
        .json({ ok: false, message: "El correo se encuentra en uso"})
    }
    
    /* Encriptar Contraseña */
    body.contrasena = crypto.createHash('md5')
    .update( body.contrasena )
    .digest("hex")

    const newUser = new Usuario({ 
        nombre: body.nombre,
        usuario: body.usuario,
        contrasena: body.contrasena,
        email: body.email
     })

     /* Guardamos el usuario */
    const respServ = await newUser.save(body)
    if( respServ ) {
        return res.json({ ok: true, message: "Usuario creado exitosamente"})
    }

    /* Respuesta de la base de datos */
    res.status(400)
    .json(respServ)
}

ctrl.users = async (req, res) => {
    const usuarios = await Usuario.find({})
    return res.json({ ok:true, usuarios })
}

module.exports = ctrl