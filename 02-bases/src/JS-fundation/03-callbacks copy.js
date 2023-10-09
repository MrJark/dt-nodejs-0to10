// Los callbacks son funciones que se pasan como argumentos a una función

const users = [
  { id: 1, name: 'Jonh' },
  { id: 2, name: 'Jenny' }
]

function getUserById (id, callback) {
  const user = users.find(function (user) {
    return user.id === id
  })
  // console.log('hola 1')
  if (!user) {
    // console.log('hola')
    return callback(`User is not exist with ${id}`) // sale un error por Standard pero funciona
  }
  // console.log('hola')
  return callback(null, user)
}

// console.log(getUserById(1))
module.exports = {
  getUserById
}
