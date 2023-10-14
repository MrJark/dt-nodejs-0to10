import { getUUID } from '../../src/plugins/get-id.plugin';

describe( 'plugins/get-id.plugin', () => {
  test( 'should return string', () => {
    expect( typeof getUUID() ).toBe( 'string' )

    // los UUID devuelven 36 caracteres 
    const lengthUUID = getUUID().length
    expect( lengthUUID ).toBe( 36 )
  } )
} )