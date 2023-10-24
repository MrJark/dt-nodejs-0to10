// import 'dotenv/config'
import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server"

( async () => {
  main()
} )()

function main() {
  Server.start()
  // console.log( { email: process.env.MAILER_SECRET_KEY } ) // gracias al dotenv y env-var puedo poner solo la siguiente linea
  console.log( envs.MAILER_EMAIL )

  // console.log( envs.PORT )
  // console.log( envs.MAILER_SECRET_KEY )
  // console.log( envs.PROD )
  // console.log( envs )


}