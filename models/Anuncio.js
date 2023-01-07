'use strict';

const mongoose = require('mongoose');

// Ads Schema definition
const anuncioSchema = mongoose.Schema({
    nombre: { type: String, index: true },
    venta: Boolean,
    precio: Number,
    foto: String, 
    tags: [String]
});

// Static methods
anuncioSchema.statics.lista = function(filtro, skip, limit, fields, sort) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
}

anuncioSchema.statics.listaTags = function() {
    const query = Anuncio.distinct('tags');
    return query.exec();
}

// Model creation
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// Export module
module.exports = Anuncio;