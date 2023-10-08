# Curso de NodeJS de [DevTalles](https://cursos.devtalles.com/courses/take/nodejs-de-cero-a-experto/lessons/)

Curso de DevTalles de Nodejs que va de 0 to 10

## Datos interesantes a tener en cuenta

* Los elementos de NODE se visualizan en consola, lo más comúnn

### Event Loop & code execution

El código siempre síncrono y es el que se ejecuta **primero** por tanto, si tienes funciones que no son síncronas, se mandarán a Libuv para guardarlas hasta que se tengan todas las funciones sínconas y ahí ya se ejecuta el asíncrono. Ej: _app4.js_

Libuv funciona de la siguiente manera: **First in, First out**, el que entra primero y se ha acabado sale primero

Los **Event Loops** es el que decide quien se ejecuta primero si hay ciertos conflictos a la hora de la ejecución.

**[Reglas de tiempo de ejecución](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)**

