import { getUserById, users } from '../../src/js-foundation/03-callbacks';

describe( 'js-foundation/03-callbacks test', () => {

  test( 'should return an error if user does not exist', ( done ) => {
    // el done funciona como un await. Se le pasa como arg en el test y se ejecuta en la parte del la función/test que necesitas que esté resuelta
    const id = 10
    getUserById( id, ( err, user ) => {
      expect( err ).toBe( `User not found with id ${id}` )
      expect( user ).toBeUndefined()
      done()
      // en esta funcion al tener un callback te hace falta el done poeque sino, el test no se introiduce dentro del callback y al poner este done, le dices que cuando llegue al done acabe
    } )
  } )

  //* Task: hacer el test para que me devuelva el user 1 ✅ hecho y con varias formas de hacer el test
  test( 'should return a user by id 1', ( done ) => {

    const idUser1 = users[ 0 ].id
    const nameUser1 = users[ 0 ].name
    getUserById( idUser1, ( err, user ) => {

      expect( idUser1 ).toBe( 1 )
      expect( nameUser1 ).toBe( 'John Doe' )
      expect( user ).not.toBeUndefined()
      expect( user ).toEqual( { "id": 1, "name": "John Doe" } )
      expect( err ).toBe( undefined ) // tiene que ser undefined porque no hay un error
      done()

    } )
  } )

} )