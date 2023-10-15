import { yarg } from './configs/plugins/yargs.plugin'

// console.log(yarg)

// para ejecutar código asíncrono desde el root de la app
(async() => {
	await main()
	// console.log('2: ejecutado')
})()

async function main() {
	// console.log('1: Main') // este log 1 se ejecuta antes que el 2
	console.log(yarg)
	
}