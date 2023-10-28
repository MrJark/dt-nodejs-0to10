
/**
 * Regla CleanCode
 * 
 * Cuando tienes más de tres métdodos en un constructor o función, es preferible crear un objeto y pasarlo
 * Por eso he creado el LogEntityOptions
*/



export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface LogEntityOptions {
  level: LogSeverityLevel,
  message: string,
  origin: string,
  createdAt?: Date,
}

export class LogEntity {

  public level: LogSeverityLevel
  public message: string
  public createdAt: Date
  public origin: string

  constructor ( options: LogEntityOptions ) {
    const { level, message, origin, createdAt = new Date } = options
    this.message = message
    this.level = level
    this.createdAt = new Date()
    this.origin = origin
  }

  static fromJSON = ( theJSON: string ): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse( theJSON )

    const log = new LogEntity( {
      message,
      level,
      // origin: 'log.entity.ts', // este es el lugar donde si sale algo mal, tiene que poner
      origin,
      createdAt
    } )
    log.createdAt = new Date( createdAt )

    return log
  }

  // esto es para adaptar la datasource de mongo
  static fromObject = ( object: { [ key: string ]: any } ): LogEntity => {
    const { message, level, createdAt, origin } = object

    const log = new LogEntity( {
      message, level, createdAt, origin
    } )

    return log
  }
}