const homeCtrl = require('../controllers/home')
const usuarioCtrl = require('../controllers/usuarios')
const productoCtrl = require('../controllers/productos')

module.exports = app => {
    app.get( '/api/participantes', homeCtrl.participantes )

    /* Control de usuarios */
    app.post( '/api/usuario', usuarioCtrl.addUser )
    app.get( '/api/usuario', usuarioCtrl.users )
    app.post( '/api/usuario/validate', usuarioCtrl.validateUser )
    app.put('/api/usuario')
    
    /* Control de productos */
    app.get('/api/producto/get', productoCtrl.getProducto )
    app.post('/api/producto/add', productoCtrl.addProducto )
    app.put('/api/producto/update', productoCtrl.updateProducto )
    app.get('/api/producto/getOne/:id', productoCtrl.getOneProducto )


}