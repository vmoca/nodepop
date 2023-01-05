'use strict';

// Cargar librerías
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// Gestionar eventos de conexión
mongoose.connection.on('error', err => {
    console.log('Error de conexión a MongoDB', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
});

// Lanzar la conexión
mongoose.connect('mongodb://127.0.0.1/anuncios');

// Exportar la conexión
module.exports = mongoose.connection;