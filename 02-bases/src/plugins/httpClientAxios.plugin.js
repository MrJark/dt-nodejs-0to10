// Las dependencias de terceros siempre tienes que intentar adaptarlas a código propio y sacarlas de los archivos y tenerlas separadas para que a la hora de cambiar o modificarlas, sea más sencillo
const axios = require('axios')

const httpClientAxiosPlugin = {
  // wrapper
  get: async (URL) => {
    const { data } = await axios.get(URL) // desestructuro de la resp la data
    return data
  },
  post: async (URL, body) => {},
  put: async (URL, body) => {},
  delete: async (URL) => {}
}

module.exports = {
  httpClientAxiosPlugin
}
