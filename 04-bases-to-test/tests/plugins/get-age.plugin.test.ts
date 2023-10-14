import { getAge } from '../../src/plugins/get-age.plugin';

describe( '/plugins/get-age.plugin', () => {
  const birthdate = '1997-06-28'
  test( 'should return the age a person', () => {

    const age = getAge( birthdate )

    expect( typeof age ).toBe( 'number' )
  } )

  test( 'should return current age', () => {

    const age = getAge( birthdate )

    const calculatedAge = new Date().getFullYear() - new Date( birthdate ).getFullYear()
    expect( age ).toEqual( calculatedAge )
  } )

  // spyOn -> método para los objetos
  test( 'should return cero years', () => {
    const spy = jest.spyOn( Date.prototype, 'getFullYear' ).mockReturnValue( 1999 )

    const birthdates = getAge( birthdate )

    expect( birthdates ).toBe( 0 )
    // console.log( spy );
    expect( spy ).toHaveBeenCalledWith()

  } )
} )