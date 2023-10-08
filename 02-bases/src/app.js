// el require devuelve aquello que haya en el module.export
// const templateExports = require('./JS-fundation/01-template') // el require es una función especial de NODE -> lo que hace es qeu si escribes en la consola npm start, ejecuta el archivo donde apunta el path
// const { emailTemplate } = require('./JS-fundation/01-template') // lo mismo que lo de arriba
// require('./JS-fundation/02-destructuring')
const { getUserById } = require('./JS-fundation/03-callbacks')

// console.log(templateExports.emailTemplate, emailTemplate)

const id = 1
getUserById(id, function (err, user) { // esta función es lo que se le llama callback
  if (err) {
    throw new Error(`User with id ${id} is not found`)
  }
  console.log(user)
})
