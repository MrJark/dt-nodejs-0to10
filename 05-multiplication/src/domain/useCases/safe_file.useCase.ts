import fs from 'fs' // esta import no debería estar aquí

export interface SaveFileUseCase {
  execute: ( options: Options ) => boolean,
}

export interface Options {
  fileContent: string,
  fileDestination?: string,
  fileName?: string,
}

export class SaveFile implements SaveFileUseCase {

  constructor(
    /** respository: StorageRepository */
  ){}

  execute ({ 
    fileContent, 
    fileName = 'table', 
    fileDestination = 'outputs' }: Options ): boolean 
  {
    try {
      // los fs no deberían estar aquí
      fs.mkdirSync( fileDestination, { recursive: true } ) // crea el directorio
      fs.writeFileSync( `${fileDestination}/${fileName}.txt`, fileContent )// pra crear el archivo table-5 en la carpeta outputs
      
      console.log('File created')
      return true
    } catch (err) {
      console.error(err)
      return false
    }
    
  }
}