const participantes = require('../models/participantes')
const ctrl = { }

ctrl.participantes = async (req, res) => {
    // Obtener todos los participantes
    const data = await participantes.find({})     
    res.json({ data })        
}

module.exports = ctrl
