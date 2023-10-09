const { httpClientPlugin } = require('../plugins')

const getPokemonById = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemon = await httpClientPlugin.get(URL)

  return pokemon.name
}

module.exports = {
  getPokemonById
}
