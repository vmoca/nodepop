# Nodepop

Nodepop es una API de demostración de un servicio de compra y venta de artículos de segunda mano. El servicio mantiene anuncios de compra o venta de artículos y permite el filtrado por varios criterios.

## Instalando Nodepop

Instalar las dependencias necesarias:
```
npm install
```

## Requisito - MongoDB
Previamente hay que instalar MongoDB según el SO que utilices. 

Una vez instalado, en Windows el servicio debe arrancar de manera predeterminada. En Linux o Mac puedes arrancar el servidor local de mongoDB con:

```
./bin/mongodb --dbpath ./data/anuncios
```

¡Atención! Debes adaptar dicho comando a las rutas que hayas usado en tu instalación.

A partir de este momento tenemos la API instalada y la base de datos preparada. Aún hay que introducir datos en la base de datos y arrancar la API.

## Arranque de la API

Arrancar la aplicación en modo producción:
```
npm start
```

Arrancar la aplicación en modo desarrollo:
```
npm run dev
```

La API está preparada para recibir consultas.

## Documentación de la API

La API ofrece la siguiente funcionalidad:
* Listade de anuncios con posibilidad de paginación.
* Posibilidad de realizar filtros:
    1. Filtros por nombre de artículo
    2. Filtros por tipo de anuncio (venta o compra)
    3. Filtros por rango de precios (mínimo y máximo)
    4. Filtros por tag

* Listado de tags existentes

* Creación, edición y borrado de un anuncio.

## Listado de anuncios

Esta URL devuelve el listado de todos los anuncios que hay en base de datos:

´´´ sh
http://localhost:3000/apiv1/anuncios 
´´´
