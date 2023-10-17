import { CreateTable } from '../../../src/domain/useCases/create_table.useCase';


describe( 'domain/useCases/create_table.useCase', () => {
  test( 'should create table with default value', () => {
    const createNewTable = new CreateTable()
    const table = createNewTable.execute( { base: 2 } )
    const rows = table.split( '\n' ).length // corta por el salto de línea
    // console.log( table )
    // console.log( rows )

    expect( createNewTable ).toBeInstanceOf( CreateTable )
    expect( table ).toContain( '2 x 2 = 4' )
    expect( table ).toContain( '2 x 10 = 20' )
    expect( rows ).toBe( 10 )

  } )

  test( 'Task: should create table with custom values ✅', () => {
    const options = {
      limit: 20,
      base: 3
    }

    const createNewTable = new CreateTable()
    const table = createNewTable.execute( options )
    const rows = table.split( '\n' ).length
    // console.log( table );


    expect( table ).toContain( '3 x 8 = 24' )
    expect( table ).toContain( '3 x 16 = 48' )
    expect( table ).toContain( '3 x 20 = 60' )
    expect( rows ).toBe( 20 )

  } )
} )