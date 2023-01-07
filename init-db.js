// Loading libraries

// Connecting to database
const connection = require('./lib/connectMongoose');

// Loading models
const Anuncio = require('./models/Anuncio');

async function main() {
    // Initializing the advertisements collection
    await initAnuncios();
    // Disconnecting from database
    connection.close();
}

async function initAnuncios() {
    const result = await Anuncio.deleteMany();
    console.log(`Se han eliminado ${result.deletedCount} anuncios.`);

    const inserted = await Anuncio.insertMany([
        {
            nombre: "Canon R6",
            venta: true,
            precio: 2600,
            foto: "canonR6.jpg",
            tags: [ "lifestyle", "photography" ]
        },
        {
            nombre: "iPad Pro 264gb",
            venta: false,
            precio: 1200,
            foto: "ipadPro264.jpg",
            tags: [ "technology", "tablet" ]
        },
        {
            nombre: "Nikon d7500",
            venta: true,
            precio: 850,
            foto: "nikond7500.jpg",
            tags: [ "lifestyle", "photography" ]
        }
    ]);
    console.log(`Se han creado ${inserted.length} nuevos anuncios.`);
}

main().catch(err => console.log('Ha ocurrido un error', err));