import { yarg } from './configs/plugins/args.plugin'
import { ServerApp } from './presentation/server_app'

// console.log(yarg)

// para ejecutar código asíncrono desde el root de la app
( async () => {
  await main()
  // console.log('2: ejecutado')
} )()

async function main() {
  // console.log('1: Main') // este log 1 se ejecuta antes que el 2
  const { b: base, l: limit, s: showTable, d: fileDestination, n: fileName } = yarg
  // console.log(yarg)

  ServerApp.run( { base, limit, showTable, fileDestination, fileName } )
}