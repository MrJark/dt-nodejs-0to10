import { CreateTable } from '../domain/useCases/create_table.useCase'

interface RunOptions {
  base: number,
  limit: number,
  showTable: boolean,
}

export class ServerApp {

  static run( {base, limit, showTable}: RunOptions ) {
    console.log('Server running...')
    
    const table = new CreateTable().execute({ base, limit})

    console.log(table, {showTable})
    
  }
}