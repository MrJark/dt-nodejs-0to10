// Patrón adaptador para el plugin Get Age

const getAgePlugin = require('get-age')

const getAge = (birthday) => {
  if (!birthday) throw new Error('Birthday is required')

  return getAgePlugin(birthday)
}

module.exports = {
  getAge
}
