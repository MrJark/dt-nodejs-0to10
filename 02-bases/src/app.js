// el require devuelve aquello que haya en el module.export
const templateExports = require('./JS-fundation/01-template') // el require es una función especial de NODE -> lo que hace es qeu si escribes en la consola npm start, ejecuta el archivo donde apunta el path
const { emailTemplate } = require('./JS-fundation/01-template') // lo mismo que lo de arriba

console.log(templateExports.emailTemplate, emailTemplate)
