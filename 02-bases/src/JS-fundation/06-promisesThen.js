const getPokemonById = (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  // con el return le dices que va a devolver una promesa
  return fetch(URL)
    .then(resp => resp.json())
    .then(pokemon => pokemon.name)
}

module.exports = {
  getPokemonById
}
