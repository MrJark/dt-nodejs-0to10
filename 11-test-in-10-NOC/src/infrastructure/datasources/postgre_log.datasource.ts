import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const prismaClient = new PrismaClient()

const severityEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH,
}

export class PostgresLogDatasource implements LogDatasource {

  async saveLog( log: LogEntity ): Promise<void> {

    const theLevel = severityEnum[ log.level ]

    const newLog = await prismaClient.logModel.create( {
      data: {
        ...log,
        level: theLevel
      }
    } )

    console.log( 'Postgres saved!' );

  }

  async getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {
    const level = severityEnum[ severityLevel ] // aquí no puedo poner theLevel porque está esperando en el where el level

    const dbLogs = await prismaClient.logModel.findMany( {
      where: { level }
    } )

    // return dbLogs.map( dbLog => LogEntity.fromObject( dbLog ) )
    return dbLogs.map( LogEntity.fromObject ) // sería lo mismo que la de arriba pero gracias a ES6 se puede simplificar
  }

}