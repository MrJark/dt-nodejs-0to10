import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe( 'plugins/http-client.plugin', () => {
  test( 'should return a string', async () => {
    const data = await httpClientPlugin.get( 'https://jsonplaceholder.typicode.com/todos/1' )
    // console.log( data );

    // expect( data ).toEqual( { userId: 1, id: 1, title: 'delectus aut autem', completed: false } )
    expect( data ).toEqual( { userId: 1, id: 1, title: 'delectus aut autem', completed: expect.any( Boolean ) } ) // otra forma pq lo que queires buscar es si se hace la petición, indistintamente de si es true o false
  } )

  //* Tarea: comprobar que el httpClien... tenga los métodos POST, PUT & DELETE ✅ ( he querido desestructurar del http... pero no he conseguido porque me daba error el delete)
  test( 'should have POST, PUT, DELETE methods', async () => {
    expect( typeof httpClientPlugin.delete ).toBe( 'function' )
    expect( typeof httpClientPlugin.post ).toBe( 'function' )
    expect( typeof httpClientPlugin.put ).toBe( 'function' )

    // console.log( httpClientPlugin.delete );


  } )
} )