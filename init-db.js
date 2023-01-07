// Loading libraries
const readline = require('readline');
// Loading models
const Anuncio = require('./models/Anuncio');

async function main() {
    // Ask at user for confirmation about remove all content from database
    const confirmacion = await confirmarBorrado('Estás seguro de que deseas eliminar la base de datos? [n] ("si" para confirmar) ');
    if (!confirmacion) {
        process.exit();
    }
    // Connecting to database
    const connection = require('./lib/connectMongoose');
    // Initializing the advertisements collection
    await initAnuncios();
    // Disconnecting from database
    connection.close();
}

main().catch(err => console.log('Ha ocurrido un error', err));

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

function confirmarBorrado(texto) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, respuesta => {
            interface.close();
            if (respuesta.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        });
    });
};