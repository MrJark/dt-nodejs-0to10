const { httpClientAxiosPlugin } = require('../plugins')

const getPokemonById = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemon = await httpClientAxiosPlugin.get(URL)

  return pokemon.name
}

module.exports = {
  getPokemonById
}
