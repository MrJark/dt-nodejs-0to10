import { CronJob } from "cron";


export class Server {

  public static start() {
    // es un método público ( aunque todos los son a no ser que lo especifiques )
    // la palabra static se pone para hacer referencia al start con solo poner el punto -> Server.start sino sería muchop más largo la llamada del método start
    console.log( 'Server started...' );

    const job = new CronJob(
      '*/2 * * * * *', // para entender como funciona en la doc -> https://www.npmjs.com/package/cron
      () => {
        console.log( 'You will see this message every second' );
      }
    );
    // job.start() // esto es para que empiece a correr
  }
}