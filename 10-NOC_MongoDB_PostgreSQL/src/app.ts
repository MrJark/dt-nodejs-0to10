// import 'dotenv/config'
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDB } from "./data/mongo";
import { Server } from "./presentation/server"


( async () => {
  main()
} )()

async function main() {

  await MongoDB.connect( {
    mongoURL: envs.MONGO_URL,
    DBName: envs.MONGO_DB_NAME
  } )

  // Grabar/crear registro
  // Crear una colección = tables
  // documentos = registro

  // const newLog = await LogModel.create( {
  //   message: 'test message from Mongo',
  //   origin: 'app.ts',
  //   level: 'low',
  // } )

  // await newLog.save()// con esto grabamos en la base de datos

  // con estas dos lúineas siguientes salen en la consola los logs que he modificado en Mongo
  // const logs = await LogModel.find()
  // console.log( logs );


  // Server.start()
}