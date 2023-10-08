// para que esto funcione en la consola tienes que estar haciendo el node app2.js
const fs = require('fs')

const data = fs.readFileSync('readme.md', 'utf8')
const wordCount = data.split(' ').length

//* Task: contar cuantas veces sale la palabra React ( debe ser caseInsensitive ) ❌ habia aplicado el .filter() pero le habiua pasado un string, 'react' y no le habia psado la función que haga lo encuentre
// // const wordCountReact = data.split(' ').filter('react') // la mala
// const wordCountReact = data.split(' ').filter(word => word.toLowerCase() === 'react').length // <- estaría bien pero falta
const wordCountReact = data.split(' ').filter(word => word.toLowerCase().includes('react')).length // mejor
const reactTotalCount = data.match(/react/gi ?? []).length // ? como debería haber sido con expresión regular

console.log('Palabras Totales:', wordCount)
console.log('Número de veces que aparece React:', wordCountReact)
console.log('Número de veces que aparece React:', reactTotalCount)
