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

## Inicializando la base de datos
Es recomendable inicializar la base de datos antes de empezar a utilizar la API. Al inicializarla se crearán 3 auncios predefinidos.

Inicilizar la base de datos:
```
npm run init-db
```

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

# Documentación de la API

La API ofrece la siguiente funcionalidad:

* Listado de anuncios con posibilidad de realizar filtros:
    1. Filtros por nombre de artículo
    2. Filtros por tipo de anuncio (venta o compra)
    3. Filtros por precio ó rango de precios (mínimo y máximo)
    4. Filtros por tag

* Listado de anuncios con posibilidad de paginación.

* Listado de anuncios mediante selección de campos.

* Listado de anuncios ordenados.

* Listado de tags existentes.

* Creación de un nuevo anuncio.

## Listado de anuncios con filtros
Podemos obtener un listado de todos los anuncios que hay en base de datos.

Obtener listado de anuncios:
```
http://localhost:3000/apiv1/anuncios
```

Filtrar anuncios por nombre:
```
http://localhost:3000/apiv1/anuncios?nombre=Canon R6
```

Filtrar anuncios por tipo (en venta o para compra):
```
http://localhost:3000/apiv1/anuncios?venta=true
```
```
http://localhost:3000/apiv1/anuncios?venta=false
```

Filtrar anuncios por precio / rango de precios:
```
http://localhost:3000/apiv1/anuncios?precio=2600
```
```
http://localhost:3000/apiv1/anuncios?precio=100-2600
```
```
http://localhost:3000/apiv1/anuncios?precio=1000-
```
```
http://localhost:3000/apiv1/anuncios?precio=-1000
```

Filtrar anuncios por tags:
```
http://localhost:3000/apiv1/anuncios?tags=photography
```

## Paginación de anuncios
Podemos paginar el listado de anuncios o paginar el listado saltándonos algún anuncio.

Ejemplo de paginación sin saltar ningún anuncio y paginado de 2 en 2:
```
http://localhost:3000/apiv1/anuncios?skip=0&limit=2
```

Ejemplo de paginación saltándonos el primer anuncio y paginado de 2 en 2:
```
http://localhost:3000/apiv1/anuncios?skip=1&limit=2
```
## Selección de campos
Podemos mostrar anuncios mediante selección de campos.

Ejemplo de selección de campos mostrando el campo "nombre" y el "id":
```
http://localhost:3000/apiv1/anuncios?fields=nombre
```

Ejemplo de selección de campos mostrando únicamente el campo "nombre", sin el "id":
```
http://localhost:3000/apiv1/anuncios?fields=nombre -_id
```

## Ordenar anuncios
Ejemplo de anuncios ordenados por precio:
```
http://localhost:3000/apiv1/anuncios?sort=precio
```

## Obtener listado de tags existentes
Obtener un listado de todos los tags existentes:
```
http://localhost:3000/apiv1/anuncios/tags
```

## Crear nuevos anuncios
Podemos crear nuevos anuncios, para ello utilizaremos postman con el método POST e iremos introduciendo los campos "nombre", "venta", "precio", "foto" y "tags":
```
POST http://localhost:3000/apiv1/anuncios
```
