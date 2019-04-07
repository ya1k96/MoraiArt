const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Rutas = require('./routes/home')
const Router = express.Router()

/* Middlewares */
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() );
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

/* Rutas */
app.get('/', (req, res) => {
    res.status(400)
    .json({ error: true, message: "Opcion no valida"})
})
Rutas(app)


/* Base de datos */
mongoose.connect('mongodb://localhost:27017/morai', (err, res) =>{
    if(!err) {
        console.log('Database: OK')
    }
});

app.listen(3000, () => {
    console.log('run server')
})