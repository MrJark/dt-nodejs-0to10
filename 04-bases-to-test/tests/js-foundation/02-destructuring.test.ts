import { characters } from "../../src/js-foundation/02-destructuring";

describe( 'js - foundations /02-destructuring.ts', () => {

  test( 'should contain Flash, Superman', () => {

    expect( characters ).toContain( 'Flash' )
    expect( characters ).toContain( 'Superman' )

  } )

  test( 'should contain Flash as first character', () => {
    const [ flash, superman ] = characters

    expect( flash ).toContain( 'Flash' )
    expect( superman ).toContain( 'Superman' )

  } )
} )