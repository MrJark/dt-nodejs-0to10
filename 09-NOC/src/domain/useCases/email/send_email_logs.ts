import { EmailServices } from "../../../presentation/email/email.services"
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
    } catch ( error ) {

    }
    return true
  }
}