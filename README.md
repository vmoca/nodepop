# Nodepop

Nodepop es una API de demostración de un servicio de compra y venta de artículos de segunda mano que permite el filtrado por varios criterios.

## Instalando Nodepop

Instalar las dependencias necesarias:
```
npm install
```

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
Podemos acceder a la "Home" del site donde encontraremos un listado completo con los anuncios disponibles con sus datos e imágenes:
```
http://localhost:3000/
```

# Documentación de la API

La API ofrece la siguiente funcionalidad:

* Vista general con todos los anuncios y sus datos e imágenes.

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

## Vista con todos los anuncios
Al acceder a la home encontraremos todos los anuncios disponibles con sus datos e imágenes y un menú de navegación con las diferentes opciones disponibles:
```
http://localhost:3000/
```

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
http://localhost:3000/apiv1/anuncios?precio=100-2000
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

## Obtener imágenes
En la página principal se muestran todos los anuncios con sus datos y sus imágenes:
```
http://localhost:3000
```

También puedes obtener imágenes de forma individual de los anuncios existentes:
```
http://localhost:3000/images/canonr6.jpg
```

## Crear nuevos anuncios
Podemos crear nuevos anuncios a través de postman. Para la consulta utilizaremos el método POST con el parámetro de body "x-www-form-urlencoded" e iremos introduciendo los campos "nombre", "venta", "precio", "foto" y "tags":
```
POST http://localhost:3000/apiv1/anuncios
```
