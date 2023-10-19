import { ServerApp } from '../../../06-test-in-05/src/presentation/server_app';
import { CreateTable } from '../../src/domain/useCases/create_table.useCase';
import { SaveFile } from '../../src/domain/useCases/save_file.useCase';


describe( '06-test-in-05/src/presentation/server_app', () => {
  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    fileDestination: 'testDestination',
    fileName: 'testName'
  }

  // test( 'should create server_app intance', () => {
  //   const serverApp = new ServerApp()

  //   expect( serverApp ).toBeInstanceOf( ServerApp )
  //   expect( typeof ServerApp.run ).toBe( 'function' ) // te aseguras de que el método siempre esté (static)
  // } )

  // test( 'should run server_app with options', () => {
  //   const logSpy = jest.spyOn( console, 'log' )
  //   const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' )
  //   const saveFileeSpy = jest.spyOn( SaveFile.prototype, 'execute' )


  //   ServerApp.run( options )
  //   expect( logSpy ).toHaveBeenCalledTimes( 2 ) // 2 porque el showTable es false
  //   expect( logSpy ).toHaveBeenCalledWith( 'Server running...' )
  //   expect( logSpy ).toHaveBeenCalledWith( 'File Created' )

  //   expect( createTableSpy ).toHaveBeenCalledTimes( 1 )
  //   // expect( createTableSpy ).toHaveBeenCalledWith( { "base": 2, "limit": 10 } ) // porque 👇🏼
  //   expect( createTableSpy ).toHaveBeenCalledWith( {
  //     base: options.base, limit: options.limit
  //   } )
  //   expect( saveFileeSpy ).toHaveBeenCalledTimes( 1 )
  //   expect( saveFileeSpy ).toHaveBeenCalledWith( {
  //     fileContent: expect.any( String ),
  //     fileDestination: options.fileDestination,
  //     fileName: options.fileName,
  //   } )
  // } )

  test( 'should run with custom values mocks', () => {

    const logMock = jest.fn()
    const logErrorMock = jest.fn()
    const createMock = jest.fn().mockReturnValue( '1 x 2 = 2' ) // con esto te aseguras de que la función está siendo llamada
    const saveFileMock = jest.fn().mockReturnValue( true )

    console.log = logMock
    console.error = logErrorMock
    CreateTable.prototype.execute = createMock
    SaveFile.prototype.execute = saveFileMock

    ServerApp.run( options )

    expect( logMock ).toHaveBeenCalledWith( 'Server running...' )
    expect( createMock ).toHaveBeenCalledWith( { base: options.base, limit: options.limit } )
    expect( saveFileMock ).toHaveBeenCalledWith( {
      fileContent: '1 x 2 = 2',
      fileDestination: options.fileDestination,
      fileName: options.fileName
    } )
    expect( logErrorMock ).not.toHaveBeenCalled()
  } )

} )
