# Curso de NodeJS de [DevTalles](https://cursos.devtalles.com/courses/take/nodejs-de-cero-a-experto/lessons/)

Curso de DevTalles de Nodejs que va de 0 to 10

## Instalaciones

Cuando vayas a intalar paquetes **debe** de estar justificado. Las instalaciones que estoy haciendo en este repo son en la raiz ya que estoy haciendo un monorepositorio multipaquete para evitar tantos node_modules en el mismo.

Además **todas** las aplicaciones de terceros debes tenerlas centralizadas en un file por si un día quieres eliminarlo o modificarlo, esté todo en el mismo sitio.

* [Nodemon](https://www.npmjs.com/package/nodemon) le dice a Node que cada vez que tenga un cambio haga un **npm start** para que refleje los cambios. **No** se debe usar Nodemon para producción, solo para dependencias.

* Para generar [UUID](https://www.npmjs.com/package/uuid)randoms

* Para calcular la fecha en años [npm](https://www.npmjs.com/package/get-age) ( este paquete es algo innecesario porque a más lean mejor). 

* [Axios](https://www.npmjs.com/package/axios) sirve para manejar peticiones http/https

* [Json-server](https://www.npmjs.com/package/json-server?activeTab=readme) Get a full fake REST API with zero coding in less than 30 seconds

* [Winston](https://www.npmjs.com/package/winston) es para manejar de una froma más eficiente los console.log

* Configuración de [JEST + TypeScript + Node](https://gist.github.com/Klerith/98d7b1bc0f1525e892f260813cad1007). Como es un monorepo, las configuraciones del package.json si que las tengo que hacer en el archivo que quiero, en este caso en _04-bases-to-test_
  * [Jest](https://jestjs.io/docs/getting-started)
  `Dato`: a la hroa de crear la capeta de los test, es recomendable seguir la estructura que tienes en el src y no colocarlos de manera aleatoria. Si tienes _src/patatas/con/jamon.ts_ en la carpeta de test debería ser: _patatas/con/jamon.test.ts_
  
Para que estos cambios se ejecuten, tienes que tener abierto en la terminal el nodemon que es simplemente ejecutar el comando `npm run dev`

* [Configuración de Node + TypeScript **sin** Nodemon](https://gist.github.com/Klerith/3ba17e86dc4fabd8301a59699b9ffc0b) para el **07-NOC**
  ```
    npm i -D typescript @types/node ts-node-dev rimraf
    npx tsc --init --outDir dist/ --rootDir src
  ```
  y en la **package.json**:
  ```json
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
  ```

* [Yargs](https://www.npmjs.com/package/yargs) Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface

* [Cron](https://www.npmjs.com/package/cron) Cron is a tool that allows you to execute something on a schedule

* [DOTENV](https://www.npmjs.com/package/dotenv) PARA LEER LAS VARIABLES DE ENTORNO LOCALES ( tienes que bajar y levantar el proceso ( si hay algo corriendo) sino las variables de entorno no se cargarán )

* [env-var](https://www.npmjs.com/package/env-var) para hacer las validaciones pertinentes cunado sean numbers, string, email, booleans, etc. No es imprescindible pero ayuda a las validacioens, que son esenciales y lo bueno es que no tiene dependencias por tanto, es bastante liviano

* [Nodemailer](https://www.npmjs.com/package/nodemailer) to Send emails from Node.js – easy as cake!

## Datos interesantes a tener en cuenta

* Los elementos de NODE se visualizan en consola, lo más comúnn

* Para crear un package.json de cero tienes que poner en la terminal **npm init** y si le pones la bandera **-y** te lo hará de forma manual sino, te preguntará sobre los que poner en él.

* Los callback hells son callback dentro de otros callbacks y así sucesivamente

* Cuando uses paquetes de terceros, teines que tratar que tu código sea soft y fácilmente modificable. Tines que tener los archivos de terceros en un **ÚNICO** lugar concreto para que las modificaciones en el mismo sean sencillas. Esto es un principio _clean code_

### Event Loop & code execution

El código siempre síncrono y es el que se ejecuta **primero** por tanto, si tienes funciones que no son síncronas, se mandarán a Libuv para guardarlas hasta que se tengan todas las funciones sínconas y ahí ya se ejecuta el asíncrono. Ej: _app4.js_

Libuv funciona de la siguiente manera: **First in, First out**, el que entra primero y se ha acabado sale primero

Los **Event Loops** es el que decide quien se ejecuta primero si hay ciertos conflictos a la hora de la ejecución.

**[Reglas de tiempo de ejecución](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)**

