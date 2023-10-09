// como se haría trabajando con js, ts, react, next... pero estoy en node por tanto, no es así del todo. Te hace falta el module.exports
// export const { getAge } = require('./getAge.plugin')
// export const { getUUID } = require('./getUUID.plugin')

const { getAge } = require('./getAge.plugin')
const { getUUID } = require('./getUUID.plugin')

module.exports = {
  getAge,
  getUUID
}
