import fs from 'fs' // esto es lo que necesito para crear archivos en el root ( viene ya en node )
import { yarg } from './configs/plugins/yargs.plugin'

// console.log(yarg)
const {b: base = 2, l: limit = 10, s: showTable} = yarg

// let outputMessage:string = ''
// const headerMessage = `
// ==================================
//         Tabla del ${ base }
// ==================================\n
// `
// for (let i = 1; i <= 10; i++ ) {
// 	outputMessage += `${base} x ${i} = ${base * i}\n` // lo último, ' \n ', es un salto de linea
// }

// outputMessage = headerMessage + outputMessage
// console.log(outputMessage)

// const outputPath = 'outputs'
// fs.mkdirSync(outputPath, {recursive: true}) // crea el directorio
// fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage)// pra crear el archivo table-5 en la carpeta outputs

//* Tarea: hacer la tabla de multiplicar en base a las opciones l, s y b ❌ no he sabido como coger y modificar esa l, s y b ( era solo desestructurar... 😑)

let outputMessage: string = ''
const headerMessage = `
==================================
        Tabla del ${base}
==================================\n
`
for ( let i = 1; i <= limit; i++ ) {
  outputMessage += `${base} x ${i} = ${base * i}\n` // lo último, ' \n ', es un salto de linea
}

outputMessage = headerMessage + outputMessage
if( showTable ) {
  console.log( outputMessage )
}

const outputPath = 'outputs'
fs.mkdirSync( outputPath, { recursive: true } ) // crea el directorio
fs.writeFileSync( `${outputPath}/table-${base}.txt`, outputMessage )// pra crear el archivo table-5 en la carpeta outputs

// para ejecutar el código y que salga tienes que poner en la consola: npx ts-node src/app.logic.ts -b <#base> -s (o no) - l (#límite) (o no) ej: npx ts-node src/app.logic.ts -b 2 -s -l 8