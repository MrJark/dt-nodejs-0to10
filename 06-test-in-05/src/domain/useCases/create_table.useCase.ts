
export interface CreateTableUseCase {
  // eslint-disable-next-line no-unused-vars
  execute: ( options: CreateTableOptions ) => string,
}

export interface CreateTableOptions {
  base: number,
  limit?: number,
}

export class CreateTable implements CreateTableUseCase {

  constructor (
    /**
     * DI: dependency injection 
    */
  ) { }

  // también se suele poner 'run' en vez de execute
  execute( { base, limit = 10 }: CreateTableOptions ) {
    let outputMessage = ''
    for ( let i = 1; i <= limit; i++ ) {
      outputMessage += `${base} x ${i} = ${base * i}` //\n lo último, ' \n ', es un salto de linea

      if ( i < limit ) outputMessage += '\n' // añadido aquí y eliminado en la de arriba para poder probar mejor el test
    }

    return outputMessage
  }

}