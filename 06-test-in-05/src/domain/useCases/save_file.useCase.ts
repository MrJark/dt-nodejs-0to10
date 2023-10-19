import fs from 'fs' // esta import no debería estar aquí

export interface Options {
  fileContent: string,
  fileDestination?: string,
  fileName?: string,
}

export interface SaveFileUseCase {
  //elimino el error con esto de que las options no son llamadas con la línea siguiente esto es por el linter
  // eslint-disable-next-line no-unused-vars 
  execute: ( options: Options ) => boolean,
}


export class SaveFile implements SaveFileUseCase {

  constructor (
    /** respository: StorageRepository */
  ) { }

  execute( {
    fileContent,
    fileName = 'table',
    fileDestination = 'outputs' }: Options ): boolean {
    try {
      // los fs no deberían estar aquí
      fs.mkdirSync( fileDestination, { recursive: true } ) // crea el directorio
      fs.writeFileSync( `${fileDestination}/${fileName}.txt`, fileContent )// pra crear el archivo table-5 en la carpeta outputs

      // console.log( 'File created' ) // comento para no escuchar ruido en el test
      return true
    } catch ( err ) {
      // console.error( err ) // se puede hacer con winston para que en la terminal no haya ruido
      return false
    }

  }
}