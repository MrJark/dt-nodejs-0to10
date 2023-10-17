import { CreateTable } from '../domain/useCases/create_table.useCase'
import { SaveFile } from '../domain/useCases/safe_file.useCase'

interface RunOptions {
  base: number,
  limit: number,
  showTable: boolean,
}

export class ServerApp {

  static run( {base, limit }: RunOptions ) { // he quitado showTable de la desestructuración
    console.log('Server running...')
    
    const table = new CreateTable()
      .execute({ base, limit})
    const wasCreated = new SaveFile()
      .execute({ fileContent: table })

    // console.log(table, {showTable})

    wasCreated
      ? console.log('File Created')
      : console.log('File not created')
      
      
  }
}