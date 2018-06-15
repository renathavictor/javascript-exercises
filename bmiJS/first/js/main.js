const alturaElemento = document.querySelector('input[name=altura]')
const sexoElemento = document.querySelector('input:checked')
const pesoElemento = document.querySelector('input[name=peso]')
const imcElemento = document.querySelector('#imc')
const button = document.querySelector('button')

function imcResult(params) {
  pass
}

function calculadoraDeIMC() {
  const altura = alturaElemento.value
  const peso = pesoElemento.value
  const sexo = sexoElemento.value
  
  let result = ''
  let bmi = peso / (altura ** altura)

  if (sexo == 'masculino') {
    if (bmi < 20.7)
      result = 'Abaixo do Peso'
    else if (bmi < 26.4)  
      result = 'Peso Normal'
    else if (bmi < 27.8)
      result = 'Marginalmente Acima do Peso'
    else if (bmi < 31.1)
      result = 'Acima do Peso Ideal'
    else
      result = 'Obeso'
  }

  if (sexo == 'feminino') {
    if (bmi < 19.1)
      result = 'Abaixo do Peso'
    else if (bmi < 25.8)
      result = 'Peso Normal'
    else if (bmi < 27.3)
      result = 'Marginalmente Acima do Peso'
    else if (bmi < 32.3)
      result = 'Acima do Peso Ideal'
    else
      result = 'Obeso'
  }

  return imcElemento.value = result
}


button.addEventListener('click', function () {
  calculadoraDeIMC()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Escape') {
    alturaElemento.value = ''
    pesoElemento.value = ''
    imcElemento.value = ''
  } else if (event.key == 'Enter') {
    calculadoraDeIMC()
  }

})

function LimparFormulario() {
  alturaElemento.value = ''
  pesoElemento.value = ''
  sexoElemento.value = ''
  imcElemento.value = ''
}

function atualizarPage() {
  window.location.reload()
}