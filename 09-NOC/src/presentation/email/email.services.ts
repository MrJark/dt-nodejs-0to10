//? como buena práctica, los archivos de terceros simepre en archivos separados del resto donde solo esté aquí configurado

import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'
import { LogRepository } from '../../domain/repository/log.repository'
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity'

interface SendEmailOptions {
  to: string | string[],
  subject: string,
  htmlBody: string,
  attachements?: Attachement[],
}

interface Attachement {
  filename: string,
  path: string,
}

export class EmailServices {
  private transporter = nodemailer.createTransport( {
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  } )

  constructor ( // inyec de dependencias
    // private readonly logRepository: LogRepository // no hace falta ya porque las he colocado en el send_email_logs.ts
  ) { }

  async sendEmail( options: SendEmailOptions ): Promise<boolean> {
    const { htmlBody, subject, to, attachements = [] } = options

    try {

      const sentInformation = await this.transporter.sendMail( {
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements
      } )

      console.log( sentInformation );

      const sucessLog = new LogEntity( {
        level: LogSeverityLevel.low,
        message: 'Email sent',
        origin: 'email.service.ts'
      } )

      // this.logRepository.saveLog( sucessLog )
      return true
    } catch ( error ) {

      const errorLog = new LogEntity( {
        level: LogSeverityLevel.high,
        message: 'Email not sent',
        origin: 'email.service.ts'
      } )

      // this.logRepository.saveLog( errorLog )
      return false
    }
  }

  async sendEmailWithFileSystemLogs( to: string | string[] ) {
    const subject = 'Servers Logs'
    const htmlBody = `
      <h3>Logs del sistemas - NOC</h3>
      <p>Un párrafo de relleno bru</p>
    `
    const attachements: Attachement[] = [
      { filename: 'logs_all.log', path: './logsPath/logs_all.log' },
      { filename: 'logs_high.log', path: './logsPath/logs_high.log' },
      { filename: 'logs_medium.log', path: './logsPath/logs_medium.log' },
    ]

    return this.sendEmail( {
      to, subject, attachements, htmlBody
    } )
  }
}