
// process.argv = [ 'node', 'app.ts', '-b', '10' ]
// import '../src/app'
// una froma de hacer el mock 👆🏽👆🏽
import { ServerApp } from '../src/presentation/server_app'

describe( 'Test App.ts', () => {
  test( 'should call Server.run with values', async () => {
    const serverRunMock = jest.fn()
    ServerApp.run = serverRunMock
    process.argv = [ 'node', 'app.ts', '-b', '10', '-l', '5', '-n', 'test-file', '-d', 'test-destination' ]

    await import( '../src/app' )

    expect( serverRunMock ).toHaveBeenCalledWith( {
      base: 10,
      fileDestination: "test-destination",
      fileName: "test-file",
      limit: 5,
      showTable: false
    } )
  } )
} )