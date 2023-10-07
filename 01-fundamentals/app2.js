// para que esto funcione en la consola tienes que estar haciendo el node app2.js
const fs = require('fs') // fs = file sistem

const data = fs.readFileSync('readme.md', 'utf8') // lee la data que hay en el readme.md y lo pasa por el utf8 para los carácteres especiales

const newData = data.replace(/React/ig, 'Angular') // esto remplaza la palabra React por Angular

fs.writeFileSync('Readme-angular.md', newData) // creas un nuevo readme con los nuevos datos que le has dicho que sustituya

console.log(data)
