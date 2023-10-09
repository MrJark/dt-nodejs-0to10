// Los callbacks son funciones que se pasan como argumentos a una función
//* Tarea: hacer que el getUserById sea una arrow function ✅
const users = [
  { id: 1, name: 'Jonh' },
  { id: 2, name: 'Jenny' }
]

// function getUserById (id, callback) {
//   const user = users.find(function (user) {
//     return user.id === id
//   })
//   // console.log('hola 1')
//   if (!user) {
//     // console.log('hola')
//     return callback(`User does not exist with ${id}`) // sale un error por Standard pero funciona
//   }
//   // console.log('hola')
//   return callback(null, user)
// }

const getUserById = (id, callback) => {
  // const user = users.find(user => {
  //   return user.id === id
  // })
  const user = users.find(user => user.id === id) // igual resultado que el de arriba
  user // este ternario es lo mismo que poner lo de abajo
    ? callback(null, user)
    : callback(`User does not exist with ${id}`)

  // if (!user) {
  //   return callback(`User does not exist with ${id}`)
  // }
  // return callback(null, user)
}

// console.log(getUserById(1))
module.exports = {
  getUserById
}
