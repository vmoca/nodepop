'use strict';

const express = require('express');
const createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');

const router = express.Router();

// Returns ads list                                 GET /apiv1/anuncios      http://localhost:3000/apiv1/anuncios
router.get('/', async (req, res, next) => {
    try {
        // filters by nombre, precio, venta and tags
        const nombre = req.query.nombre;            // ( /apiv1/anuncios?nombre=Canon R6 )
        const venta = req.query.venta;              // ( /apiv1/anuncios?venta=true )
        const precio = req.query.precio;            // ( /apiv1/anuncios?precio=2600 OR ?precio=100-2600 OR ?precio=1000- OR ?precio=-1000 )
        const tags = req.query.tags;                // ( /apiv1/anuncios?tags=photography )
        // pagination
        const skip  = req.query.skip;               // ( /apiv1/anuncios?skip=0&limit=2 )
        const limit = req.query.limit;
        // field seection
        const fields = req.query.fields;            // ( /apiv1/anuncios?fields=nombre OR /apiv1/anuncios?fields=nombre -_id)
        // sort
        const sort = req.query.sort;                // ( /apiv1/anuncios?sort=precio )

        const  filtro = {};
        if (nombre) {
             filtro.nombre = nombre;
        }
        if (venta) {
            filtro.venta = venta;
        }
        if (precio) {
            if (precio.includes('-')) {
                const precios = precio.split('-');
                if (precios[0] === '') {
                     filtro.precio = {$lte: precios[1]};
                } else if (precios[1] === '') {
                     filtro.precio = {$gte: precios[0]};
                } else {
                     filtro.precio = {$gte: precios[0], $lte: precios[1]};
                }
            } else {
                 filtro.precio = precio;
            }
        }
        if (tags) {
            filtro.tags = {$in: tags};
        }

        const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
        res.json({ results: anuncios });
    } catch (err) {
        next(err);
    }
});

// Returns a list of available Tags                 GET  /apiv1/anuncios/tags
router.get('/tags', async (req, res, next) => {
    try {
        const tagsDisponibles = await Anuncio.listaTags();
        res.json({ results: tagsDisponibles });
    } catch (err) {
        next(err);
    }
});

// Create new ad                                    POST /apiv1/anuncios (body=anuncioData)
router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;
        const anuncio = new Anuncio(anuncioData);
        const anuncioGuardado = await anuncio.save();
        res.json({ result: anuncioGuardado });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
