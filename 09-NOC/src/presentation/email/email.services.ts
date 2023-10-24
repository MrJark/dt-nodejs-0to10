//? como buena práctica, los archivos de terceros simepre en archivos separados del resto donde solo esté aquí configurado

import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'

interface SendEmailOptions {
  to: string,
  subject: string,
  htlmBody: string,
  // attachements
}

export class EmailServices {
  private transporter = nodemailer.createTransport( {
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  } )

  async sendEmail( options: SendEmailOptions ): Promise<boolean> {
    const { htlmBody, subject, to } = options

    try {

      const sentInformation = await this.transporter.sendMail( {
        to: to,
        subject: subject,
        html: htlmBody
      } )

      console.log( sentInformation );

      return true
    } catch ( error ) {

      return false
    }
  }
}