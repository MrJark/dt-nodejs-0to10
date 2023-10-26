import { CronJob } from "cron";


// para objetos es más cómodo usar interfaces pero para elementos aislados, types
type CronTime = string | Date
type OnTick = () => void

//! las buenas prácticas dicen que los paquetes de terceros deben de estar separados del resto y solo manejados en un archivo
export class CronService {
  static createJob( cronTime: CronTime, onTick: OnTick ): CronJob { // como cleancode, a partir de los 3 elementos, es óptimo mandar un objeto
    const job = new CronJob(
      // para entender como funciona en la doc -> https://www.npmjs.com/package/cron
      // '*/2 * * * * *',
      // () => {
      //   console.log( 'You will see this message every second' );
      // }
      cronTime,
      onTick,
    );
    job.start() // esto es para que empiece a correr

    return job
  }
}