import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

// esta 'b' y la 'l' son como poner en la consola npm -h. Esa h significa help y hace ciertas cosas, pues eso es lo que estás haciendo aquí
export const yarg = yargs(hideBin(process.argv))
	.option('b',{
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Multiplication table base'
	})
	.option('l', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Multiplication table limit'
	})
	.option('s', {
		alias: 'show',
		type: 'boolean',
		default: false,
		describe: 'Show Multiplication table'
	})
	.parseSync()