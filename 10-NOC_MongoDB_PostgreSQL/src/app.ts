// import 'dotenv/config'
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDB } from "./data/mongoo";
import { Server } from "./presentation/server"
import { PrismaClient } from '@prisma/client'


( async () => {
  main()
} )()

async function main() {

  await MongoDB.connect( {
    mongoURL: envs.MONGO_URL,
    DBName: envs.MONGO_DB_NAME
  } )

  // para prisma
  const prisma = new PrismaClient()
  const newLog = await prisma.logModel.create( {
    data: {
      level: 'LOW',
      message: 'Test msg',
      origin: 'App.ts'
    }
  } )
  console.log( { newLog } );
  // para leer los logs de prisma
  // const logs = await prisma.logModel.findMany()
  // console.log( logs );



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


  Server.start()
}