import { CronJob } from "cron";
import { CronService } from "./cron/cron_service";


export class Server {

  public static start() {
    // es un método público ( aunque todos los son a no ser que lo especifiques )
    // la palabra static se pone para hacer referencia al start con solo poner el punto -> Server.start sino sería muchop más largo la llamada del método start
    console.log( 'Server started...' );

    CronService.createJob(
      '*/5 * * * * *', // cada 5 sengundos
      () => {
        const date = new Date()
        console.log( '5 seconds', date );
      }
    )
  }
}