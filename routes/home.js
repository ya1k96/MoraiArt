const homeCtrl = require('../controllers/home')
const usuarioCtrl = require('../controllers/usuarios')

module.exports = app => {
    app.get( '/api/participantes', homeCtrl.participantes )

    /* Control de usuarios */
    app.post( '/api/usuario', usuarioCtrl.addUser )
    app.get( '/api/usuario', usuarioCtrl.users )
    app.post( '/api/usuario/validate', usuarioCtrl.validateUser )

}