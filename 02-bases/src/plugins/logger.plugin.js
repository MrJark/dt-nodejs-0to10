// esto lo he copiado de la doc de winston https://www.npmjs.com/package/winston
const winston = require('winston')
const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
  level: 'info',
  // format: winston.format.json(), // otra forma es con el combine
  format: combine(
    timestamp(), // el momento en el tiempo en el que sucedio el problema
    json() // el formato
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

// exportación de una factory function
module.exports = function buildLogger (service) {
  return {
    log: (message) => {
      logger.log('info', {
        message,
        service
      })
    }
  }
}
