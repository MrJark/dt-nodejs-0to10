const getPokemonById = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

  const resp = await fetch(URL)
  const pokemon = await resp.json()

  return pokemon.name
}

module.exports = {
  getPokemonById
}
