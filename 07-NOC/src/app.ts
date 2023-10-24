import 'dotenv/config'
import { Server } from "./presentation/server"

( async () => {
  main()
} )()

function main() {
  Server.start()
  console.log( { email: process.env.MAILER_SECRET_KEY } );

}