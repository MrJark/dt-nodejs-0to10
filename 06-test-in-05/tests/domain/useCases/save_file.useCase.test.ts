import { SaveFile } from '../../../src/domain/useCases/save_file.useCase';
import fs from 'fs';

describe( 'domain/useCases/safe_file.useCase', () => {
  // beforeEach( () => { // antes de cada prueba
  //   // clean up para que en todo momento no de un falso positivo y se borre el archivo de outputs, si está
  //   fs.rmSync( 'outputs', { recursive: true } )
  // } )

  // SOLO SE PUEDE PONER UNA A LA VEZ YA QUE SINO DARÁ ERROR PORQUE NO LO CREARÁ
  // después de cada prueba
  afterEach( () => {
    const outputFolderExist = fs.existsSync( 'outputs' )
    if ( outputFolderExist ) fs.rmSync( 'outputs', { recursive: true } )

    const customOutputFolderExist = fs.existsSync( 'custom-outputs' )
    if ( customOutputFolderExist ) fs.rmSync( 'custom-outputs', { recursive: true } )
  } )


  const options = {
    fileContent: 'Custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name'
  }
  const filePath = `${options.fileDestination}/${options.fileName}.txt`

  test( 'should save with default values', () => {
    const saveFile = new SaveFile()
    const filePath = 'outputs/table.txt'
    const options = {
      fileContent: 'test content' // solo este porque este es el obligatorio
    }
    const result = saveFile.execute( options )

    const fileExists = fs.existsSync( filePath ) // puede dar un falso positivo porque puede estar creado ya el archivo
    const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8' } )

    expect( result ).toBeTruthy()
    expect( fileExists ).toBeTruthy()
    expect( fileContent ).toBe( options.fileContent )

  } )

  test( 'Task: should save files with custom values 🟡 se crea pero da un error en el fileContent. No habia hecho el filePath, de ahí el error', () => {


    const saveFile = new SaveFile()
    const result = saveFile.execute( options )

    const fileExists = fs.existsSync( filePath ) // puede dar un falso positivo porque puede estar creado ya el archivo
    const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8' } )

    expect( result ).toBeTruthy()
    expect( fileExists ).toBeTruthy()
    expect( fileContent ).toBe( options.fileContent )
  } )
} )