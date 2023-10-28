import { LogDatasource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasource implements LogDatasource {

  private readonly logPath = 'logsPath/'
  private readonly allLogsPath = 'logsPath/logs_all.log'
  private readonly mediumLogsPath = 'logsPath/logs_medium.log'
  private readonly highLogsPath = 'logsPath/logs_high.log'

  constructor () {
    this.createLogsFiles()
  }

  private createLogsFiles = () => {
    if ( !fs.existsSync( this.logPath ) ) { // para crear el directorio si no existe
      fs.mkdirSync( this.logPath )
    }

    // if ( fs.existsSync( this.allLogsPath ) ) return
    // fs.writeFileSync( this.allLogsPath, '' )
    // foma elegante de hacer las creación de los 3 directorios

    [
      this.allLogsPath,
      this.mediumLogsPath,
      this.highLogsPath,
    ].forEach( path => {
      if ( fs.existsSync( path ) ) return
      fs.writeFileSync( path, '' )
    } )

  }

  async saveLog( newLog: LogEntity ): Promise<void> {
    const logAsJSON = `${JSON.stringify( newLog )}\n`

    fs.appendFileSync( this.allLogsPath, logAsJSON )

    if ( newLog.level === LogSeverityLevel.low ) return

    if ( newLog.level === LogSeverityLevel.medium ) {
      fs.appendFileSync( this.mediumLogsPath, logAsJSON )
    } else {
      fs.appendFileSync( this.highLogsPath, logAsJSON )
    }
  }

  private getLogsFromFile = ( path: string ): LogEntity[] => {
    const content = fs.readFileSync( path, 'utf-8' ) // para leer el contenido y el tipo de language
    if ( content === '' ) return []

    const stringLogs = content.split( '\n' ).map( // para serparar los logs por el salto de línea que he puento en el saveLog
      log => LogEntity.fromJSON( log )
    ) // esto se puede reducir a 👇🏼
    // const stringLogs = content.split( '\n' ).map( LogEntity.fromJSON )

    return stringLogs
  }

  async getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {
    switch ( severityLevel ) {
      case LogSeverityLevel.low:
        return this.getLogsFromFile( this.allLogsPath )
      case LogSeverityLevel.medium:
        return this.getLogsFromFile( this.mediumLogsPath )
      case LogSeverityLevel.high:
        return this.getLogsFromFile( this.highLogsPath )

      default:
        throw new Error( `This ${severityLevel} is not implemented` )
    }
  }

}