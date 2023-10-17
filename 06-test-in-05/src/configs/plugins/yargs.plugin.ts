import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

// esta 'b' y la 'l' son como poner en la consola npm -h. Esa h significa help y hace ciertas cosas, pues eso es lo que estás haciendo aquí
export const yarg = yargs(hideBin(process.argv))
  .option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show Multiplication table',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File Name',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File Destination'
  })
  .check((argv ) => { // ,options las he quitado para que no me de un error al no llamarlas por el ESlint
    // los argv son aquellas options que has colocado arriba mientras que las options que envias 
    // console.log({argv, options})
    if(argv.b < 1 ) throw 'Error: base must be greater than 0'
    return true
  })
  .parseSync()