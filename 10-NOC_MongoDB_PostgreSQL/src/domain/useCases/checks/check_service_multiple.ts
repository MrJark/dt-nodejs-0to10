import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from "../../repository/log.repository"

interface CheckServiceMultipleUseCase {
  execute( url: string ): Promise<boolean>
}

type SuccessCallback = ( () => void ) | undefined
type ErrorCallback = ( ( error: string ) => void ) | undefined

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {

  // las inyecciones d edependencias se suelen hacer en los constructores
  constructor (
    private readonly logRepository: LogRepository[],
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) { }

  // este método privado es para poder llamar a todas las DB ya que sin esto, y sin el arreglo de LogRepository solo podríua llamar de uno en uno
  private callLogs( log: LogEntity ) {
    this.logRepository.forEach( logRepository => {
      logRepository.saveLog( log )
    } )
  }

  public async execute( url: string ): Promise<boolean> {

    try {
      const req = await fetch( url )
      if ( !req.ok ) {
        throw new Error( `Error on check service ${url}` )
      }

      const log = new LogEntity( {
        message: `Service ${url} working`,
        level: LogSeverityLevel.low,
        origin: 'check_service.ts'
      } )
      this.callLogs( log )

      this.successCallback && this.successCallback() // validación para que el undefined no de error
      return true
    } catch ( err ) {
      // console.log( `${ err } ` );
      const errorMessage = `${url} is not ok. Error: ${err}`

      const log = new LogEntity( {
        message: errorMessage,
        level: LogSeverityLevel.high,
        origin: 'check_service.ts'
      } )
      this.callLogs( log )

      this.errorCallback && this.errorCallback( errorMessage ) // validación para que el undefined no de error
      return false
    }
  }
}