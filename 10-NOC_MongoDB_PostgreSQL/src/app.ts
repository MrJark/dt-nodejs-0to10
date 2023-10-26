// import 'dotenv/config'
import { envs } from './config/plugins/envs.plugin';
import { MongoDB } from "./data/mongo";
import { Server } from "./presentation/server"


( async () => {
  main()
} )()

async function main() {

  await MongoDB.connect( {
    mongoURL: envs.MONGO_URL,
    DBName: envs.MONGO_DB_NAME
  } )

  // Server.start()
}