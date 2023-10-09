// el require devuelve aquello que haya en el module.export
// const templateExports = require('./JS-fundation/01-template') // el require es una función especial de NODE -> lo que hace es qeu si escribes en la consola npm start, ejecuta el archivo donde apunta el path
// const { emailTemplate } = require('./JS-fundation/01-template') // lo mismo que lo de arriba
// require('./JS-fundation/02-destructuring')
// const { getUserById } = require('./JS-fundation/03-callbacks')
// const { getUserById } = require('./JS-fundation/04-arrows')

const { getUUID, getAge } = require('./plugins') // POR EL FACTORY FUNCTION
const { buildMakePerson } = require('./JS-fundation/05-factoryFN')

// console.log(templateExports.emailTemplate, emailTemplate)

// const id = 2
// getUserById(id, (err, user) => { // esta función es lo que se le llama callback
//   if (err) {
//     throw new Error(err)
//   }
//   console.log(user)
// })

// con lasfactory function, necesitas lo siguiente (en este caso):
const makePerson = buildMakePerson({ getUUID, getAge }) // aquí están las dependencias y no el 05-factory
const obj = { name: 'Jonh', birthday: '1997-06-28' }
const john = makePerson(obj)
console.log(john)
