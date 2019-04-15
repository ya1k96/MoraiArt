const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Rutas = require('./routes/home')
const Router = express.Router()
const dotenv = require('dotenv').config()

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
mongoose.connect( process.env.DB_URL_PROD , (err, res) =>{
    if(!err) {
        console.log('Database: OK')
    }
});

app.listen(process.env.PORT, () => {
    console.log('run server')
})
