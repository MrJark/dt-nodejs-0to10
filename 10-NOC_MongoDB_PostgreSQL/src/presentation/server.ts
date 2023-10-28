import { CronJob } from "cron";
import { CronService } from "./cron/cron_service";
import { CheckService } from "../domain/useCases/checks/check_service";
import { LogRepositoryImplementation } from "../infrastructure/repositories/log.repository.implementation";
import { FileSystemDatasource } from "../infrastructure/datasources/file_system.datasource";
import { envs } from '../config/plugins/envs.plugin';
import { EmailServices } from './email/email.services';
import { SendEmailLogs } from "../domain/useCases/email/send_email_logs";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo_log.datasource";


const logRepository = new LogRepositoryImplementation(
  new FileSystemDatasource()
  // new MongoLogDatasource() // para usar Mongo
)
const emailService = new EmailServices()

export class Server {

  public static start() {
    // es un método público ( aunque todos los son a no ser que lo especifiques )
    // la palabra static se pone para hacer referencia al start con solo poner el punto -> Server.start sino sería muchop más largo la llamada del método start
    console.log( 'Server started...!!' );
    // console.log( envs.MAILER_EMAIL );


    // new SendEmailLogs( // el sent email a través del useCases y no del service
    //   emailService,
    //   logRepository
    // ).execute( envs.MAILER_EMAIL )

    // const emailService = new EmailServices( // puedo quitar esto de aquí porque lo está tomando del servicio y lo quiero tomar del useCases
    //   // logRepository // esto ya no me sirve porque lo he creado en el send_email_logs.ts
    // )
    // emailService.sendEmailWithFileSystemLogs( [
    //   envs.MAILER_EMAIL // el email donde quieres que te sea enviado
    // ] )

    // emailService.sendEmail( {
    //   to: envs.MAILER_EMAIL,
    //   subject: 'Logs de sistemas',
    //   htmlBody: `
    //     <h3>Logs de sistemas - NOC</h3>
    //     <p>Un párrafo de relleno bru</p>
    //   `
    // } )

    // ejemplo de media noche '00 00 00 * * *'
    // CronService.createJob(
    //   '*/9 * * * * *', // cada 9 sengundos
    //   () => {
    //     const url = 'https://google.com'
    //     // const url = 'http://localhost:3000' // para cuando tengas arriba el 08-JSON-server
    //     new CheckService(
    //       // inyección de las dependencias del constructor
    //       logRepository,
    //       () => console.log( `${url} is ok` ),
    //       ( err ) => console.log( err )
    //     ).execute( url )
    //     // new CheckService().execute( 'http://localhost:3000' ) // esta es para el testeo con el 08-JSON-server que es un json ficticio con el paquete de json-server
    //   }
    // )
  }
}