import { EmailServices } from "../../../presentation/email/email.services"
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity"
import { LogRepository } from "../../repository/log.repository"

interface SendLogEmailUseCase {
  execute: ( to: string | string[] ) => Promise<boolean>
}

export class SendEmailLogs implements SendLogEmailUseCase {

  constructor (
    private readonly emailService: EmailServices,
    private readonly logRepository: LogRepository,
  ) { }

  async execute( to: string | string[] ) {

    try {
      const sent = await this.emailService.sendEmailWithFileSystemLogs( to )
      if ( !sent ) {
        throw new Error( 'Email log was not sent' )
      }

      const sucessLog = new LogEntity( {
        message: 'Log email sent',
        level: LogSeverityLevel.low,
        origin: 'send_email_logs.ts'
      } )
      this.logRepository.saveLog( sucessLog )

      return true
    } catch ( error ) {

      const errorLog = new LogEntity( {
        message: `${error}`,
        level: LogSeverityLevel.high,
        origin: 'send_email_logs.ts'
      } )
      this.logRepository.saveLog( errorLog )
      return false
    }
  }
}