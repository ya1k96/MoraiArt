const Producto = require('../models/producto')
const ctrl = {}

ctrl.getProducto = async (req, res) => {
    // const tipo = req.tipo | req.categori
    
   const productos = await Producto.find({})

   if (!productos) {
       return res
       .status(204)
       .json({ ok: false, message: 'Sin datos' })
   }

   res.json({ productos })

}

ctrl.getOneProducto = async (req, res) => {
    // const tipo = req.tipo | req.categori
   const id = req.params.id
   console.log(id)
   const producto = await Producto.findById(id)

   if (!producto) {
       return res
       .status(204)
       .json({ ok: false, message: 'Sin datos' })
   }

   res.json({ producto })

}

ctrl.addProducto = async (req, res) => {
    const body = req.body
    if( !body ) {
        return res
        .status(400)
        .json({ ok: false, message: 'Completa el formulario' })
    }
    const nuevoProducto = new Producto({
        nombre: body.nombre,
        tipo: body.tipo,
        precio: body.precio,
        stock: body.stock,
        img_src: body.img_src
    })

    const resp = await nuevoProducto.save()
    if( !resp ) {
        return res
        .status(400)
        .json(resp)
    }
    res.json({ ok: true, message: 'Producto añadido', nuevoProducto })
}

ctrl.updateProducto = async (req, res) => {
    /* TODO */
    res.json({ message: 'TODO :)' })
}

module.exports = ctrl