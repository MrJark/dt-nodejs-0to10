import { yarg } from './configs/plugins/yargs.plugin'

// console.log(yarg)

// para ejecutar código asíncrono desde el root de la app
(async() => {
	await main()
	console.log('ejecutado')
})()

async function main() {
	console.log('Main ehe')
  
}