import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// se le coloca abstract para que nadie pueda crear instancias del LogReporitory. Estas calses abstractas permiten obligar el comportamiento sobre otras clases
export abstract class LogRepository {
  abstract saveLog( log: LogEntity ): Promise<void> // es obligatorio que lo implemente por el abstract
  abstract getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>
  // si no complen las dos condiciones abstract no serán soluciones válidas para el LogReporitory
}