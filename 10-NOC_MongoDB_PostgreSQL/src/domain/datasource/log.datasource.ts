import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogDatasource {
  // se le coloca abstract para que nadie pueda crear instancias del LogDatasource. Estas calses abstractas permiten obligar el comportamiento sobre otras clases

  abstract saveLog( log: LogEntity ): Promise<void> // es obligatorio que lo implemente por el abstract
  abstract getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>
  // si no complen las dos condiciones abstract no serán soluciones válidas para el LogDatasource
}