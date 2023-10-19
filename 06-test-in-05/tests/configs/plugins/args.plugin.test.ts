// import { yarg } from '../../../src/configs/plugins/args.plugin';

const runCommand = async ( args: string[] ) => {
  process.argv = [ ...process.argv, ...args ]

  const defaultExport = await import( '../../../src/configs/plugins/args.plugin' )
  const { yarg } = defaultExport

  return yarg
}

describe( 'Test in configs/plugins/args.plugin ', () => {
  const originalArgv = process.argv
  beforeEach( () => {
    process.argv = originalArgv
    jest.resetModules()
  } )
  test( 'should return default values', async () => {
    const argv = await runCommand( [ '-b', '5' ] )
    // console.log( argv ) // para averiguar el objeto que devuelve

    // Esta es una forma pero hay valores que no los necesitas y tu solo quieres las abreviaturas por tanto, puedes hacer el siguiente expect  *1
    // expect( argv ).toEqual( {
    //   _: [],
    //   b: 5,
    //   base: 5,
    //   l: 10,
    //   limit: 10,
    //   s: false,
    //   show: false,
    //   n: 'multiplication-table',
    //   name: 'multiplication-table',
    //   d: 'outputs',
    //   destination: 'outputs',
    //   '$0': '../node_modules/jest-worker/build/workers/processChild.js'
    // } )

    // *1
    expect( argv ).toEqual( expect.objectContaining( {
      b: 5,
      l: 10,
      s: false,
      n: 'multiplication-table',
      d: 'outputs',
    } ) )
  } )

  test( 'Task: should return configuration with custom values ❌ habia colocado el customOptions en formato arry', async () => {
    const customOptions = [
      '-b', '3',
      '-l', '7',
      '-s',
      '-n', 'custom-multiplication-table',
      '-d', 'customOutputs',
    ]

    const argv = await runCommand( customOptions )
    expect( argv ).toEqual( expect.objectContaining( {
      b: 3,
      l: 7,
      s: true,
      n: 'custom-multiplication-table',
      d: 'customOutputs',
    } ) )
  } )
} )