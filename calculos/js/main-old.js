const xElement = document.querySelector('input[name=valorX]')
const YElement = document.querySelector('input[name=valorY]')
const resultElement = document.querySelector('#resultado')



function operacao() {
  let result = 0
  const x = xElement.value
  const y = YElement.value 
  let opera = document.querySelector('input[name=operacao]:checked').value

  if (opera == 'somar')
    result = parseInt(x) + parseInt(y)
  else if (opera == 'diminuir')
    result = parseInt(x) - parseInt(y)
  else if (opera == 'multiplicar')
    result = parseInt(x) * parseInt(y)  
  else 
    result = parseInt(x) / parseInt(y)

  return resultElement.value = result
}