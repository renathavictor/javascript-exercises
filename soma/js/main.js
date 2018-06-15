const xElement = document.querySelector('input[name=valorX]')
const YElement = document.querySelector('input[name=valorY]')
const resultElement = document.querySelector('#resultado')

function soma() {
  let soma = 0
  const x = xElement.value
  const y = YElement.value 
  soma = parseInt(x) + parseInt(y)

  return resultElement.value = soma
}