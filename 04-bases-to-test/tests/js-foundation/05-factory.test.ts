import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe( 'js-foundation/05-factory', () => {

  const getUUID = () => '1234';
  const getAge = () => 45;

  test( 'should return a function', () => {
    const makePerson = buildMakePerson( { getAge, getUUID } )
    expect( typeof makePerson ).toBe( 'function' )
  } )

  test( 'should return a person', () => {
    const makePerson = buildMakePerson( { getAge, getUUID } )
    const mery = makePerson( { name: 'mery', birthdate: '1991-07-04' } )

    expect( mery ).toEqual( {
      "age": 45,
      "birthdate": "1991-07-04",
      "id": "1234",
      "name": "mery",
    } )
  } )
} )