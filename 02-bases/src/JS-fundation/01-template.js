const emailTemplate =
`
  <div>
    <h1> Hi, {{name}}</h1>
    <p>Thanks for you sigIn</p>
  </div>
`
// console.log(emailTemplate)
// es recomendable que sea un export de un objeto ya que si en futuras ocasiones queires añadirle elementos, es mucho más sencillo
module.exports = {
  emailTemplate
}
