import { LogDatasource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasource implements LogDatasource {

  private readonly logPath = 'logsPath/'
  private readonly lowLogsPath = 'logsPath/logs_low.log'
  private readonly mediumLogsPath = 'logsPath/logs_medium.log'
  private readonly highLogsPath = 'logsPath/logs_high.log'

  constructor () {
    this.createLogsFiles()
  }

  private createLogsFiles = () => {
    if ( !fs.existsSync( this.logPath ) ) { // para crear el directorio si no existe
      fs.mkdirSync( this.logPath )
    }

    // if ( fs.existsSync( this.lowLogsPath ) ) return
    // fs.writeFileSync( this.lowLogsPath, '' )
    // foma elegante de hacer las creación de los 3 directorios
    [
      this.lowLogsPath,
      this.mediumLogsPath,
      this.highLogsPath,
    ].forEach( path => {
      if ( fs.existsSync( path ) ) return
      fs.writeFileSync( path, '' )
    } )

  }

  saveLog( log: LogEntity ): Promise<void> {
    throw new Error( "Method not implemented." );
  }
  getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {
    throw new Error( "Method not implemented." );
  }

}