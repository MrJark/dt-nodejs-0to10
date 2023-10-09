// Las dependencias de terceros siempre tienes que intentar adaptarlas a código propio y sacarlas de los archivos y tenerlas separadas para que a la hora de cambiar o modificarlas, sea más sencillo

const httpClientPlugin = {
  // wrapper
  get: async (URL) => {
    const resp = await fetch(URL)
    const data = await resp.json()

    return data
  },
  post: async (URL, body) => {},
  put: async (URL, body) => {},
  delete: async (URL) => {}
}

module.exports = {
  httpClientPlugin
}
