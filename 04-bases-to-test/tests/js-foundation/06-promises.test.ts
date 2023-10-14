import { getPokemonById } from '../../src/js-foundation/06-promises';

describe( 'js-foundation/06-promises', () => {
  test( 'should return a pokemon', async () => {

    const pokemonId = 151;
    const pokemonName = await getPokemonById( pokemonId )

    expect( pokemonName ).toBe( 'mew' )
  } )

  test( 'should return an error if pokemon does not exist', async () => {

    const pokemonId = 1234567890
    try {
      await getPokemonById( pokemonId )
      expect( true ).toBeFalsy()
    } catch ( error ) {
      expect( error ).toBe( `Pokemon with id ${pokemonId} does not exist` )
    }

  } )

} )