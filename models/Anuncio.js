'use strict';

const mongoose = require('mongoose');

// definir el esquema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: { type: String, unique: true },
    venta: Boolean,
    precio: Number,
    foto: String, 
    tag: [String]
});

// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportar el modelo
module.exports = Anuncio;