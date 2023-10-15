import fs from 'fs' // esto es lo que necesito para crear archivos en el root ( viene ya en node )

let outputMessage:string = ''
const base = 5
const headerMessage = `
==================================
        Tabla del ${ base }
==================================\n
`
for (let i = 1; i<= 10; i++ ) {
	outputMessage += `${base} x ${i} = ${base * i}\n` // lo último, ' \n ', es un salto de linea
}

outputMessage = headerMessage + outputMessage
console.log(outputMessage)

const outputPath = 'outputs'
fs.mkdirSync(outputPath, {recursive: true}) // crea el directorio
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage)// pra crear el archivo table-5 en la carpeta outputs