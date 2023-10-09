// Patrón adaptador para el plugin Get Age

const { v4: uuid4 } = require('uuid')

const getUUID = () => {
  return uuid4()
}

module.exports = {
  getUUID
}
