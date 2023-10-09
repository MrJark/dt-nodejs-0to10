// const getAge = require('get-age')
// const { v4: uuid4 } = require('uuid')

// Forma correcta de usar los paquetes de terceros para no depender tanto de ellos
const { getAge } = require('../plugins/getAge.plugin')
const { uuid4 } = require('../plugins/getUUID.plugin')

const buildPerson = ({ name, birthday }) => {
  return {
    // id: new Date().getTime(),
    // id: uuid4(), // forma correcta ( con dependencia de terceros )
    id: uuid4(), // forma correcta ( con dependencia de terceros )
    name,
    birthday,
    // age: new Date().getFullYear() - new Date(birthday).getFullYear() // no es correcto el calcular la edad así pero puede valer por ahora
    // age: getAge(birthday) // forma correcta ( con dependencia de terceros )
    age: getAge(birthday) // forma correcta
  }
}

const obj = { name: 'Jonh', birthday: '1997-06-28' } // ojo al formato de la fecha, tiene que ser con guiones y lo primero el año, luego el mes y luego el día sino no lo reconoce
const john = buildPerson(obj)
console.log(john)
