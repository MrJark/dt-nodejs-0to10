import { CronJob } from "cron";
import { CronService } from "./cron/cron_service";
import { CheckService } from "../domain/useCases/checks/check_service";


export class Server {

  public static start() {
    // es un método público ( aunque todos los son a no ser que lo especifiques )
    // la palabra static se pone para hacer referencia al start con solo poner el punto -> Server.start sino sería muchop más largo la llamada del método start
    console.log( 'Server started...' );

    CronService.createJob(
      '*/5 * * * * *', // cada 5 sengundos
      () => {
        // new CheckService().execute( 'https://google.com' )
        new CheckService().execute( 'http://localhost:3000' ) // esta es para el testeo con el 08-JSON-server que es un json ficticio con el paquete de json-server
      }
    )
  }
}