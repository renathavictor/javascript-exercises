const alturaElemento = document.querySelector('input[name=altura]')
const pesoElemento = document.querySelector('input[name=peso]')
const imc = document.querySelector('#imc')
const btnImc = document.querySelector('#calc-imc-btn')
const warning = document.querySelector('#warning')

function resultImc(peso, altura, sexo) {
  let bmi = peso / (altura * altura)
  if (sexo == 'feminino') {
    if (bmi < 19.1) {
      return 'Abaixo do Peso'
    } else if (bmi < 25.8) {
      return 'Peso Normal'
    } else if (bmi < 27.3) {
      return 'Marginalmente Acima do Peso'
    } else if (bmi < 32.3) {
      return 'Acima do Peso Ideal'
    } else {
      return 'Obeso'
    }
  }
  if (sexo == 'masculino') {
    if (bmi < 20.7) {
      return 'Abaixo do Peso'
    } else if (bmi < 26.4) {
      return 'Peso Normal'
    } else if (bmi < 27.8) {
      return 'Marginalmente Acima do Peso'
    } else if (bmi < 31.1) {
      return 'Acima do Peso Ideal'
    } else {
      return 'Obeso'
    }
  }
}


const styles = {
  'Abaixo do Peso': 'form-control form-control-lg border border-warning bg-warning text-white',
  'Peso Normal': 'form-control form-control-lg border border-sucess bg-success text-white',
  'Marginalmente Acima do Peso': 'form-control form-control-lg border border-warning bg-warning text-white',
  'Acima do Peso Ideal': 'form-control form-control-lg border border-warning bg-warning text-white',
  'Obeso': 'form-control form-control-lg border border-danger bg-danger text-white'
}


const msgAlerta = `
  <div class="alert alert-warning" role="alert">
    <strong>Antes de calcular informe o peso e a altura.</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
`

function validarValores(altura, peso) {
  if (isNaN(altura) || altura < 1 || isNaN(peso) || peso < 1)
    return false
  return true
}

function calculadoraDeIMC() {
  const sexo = document.querySelector('input:checked').value
  const altura = alturaElemento.value
  const peso = pesoElemento.value
  if (validarValores(altura, peso)) {
    let result = resultImc(peso, altura, sexo)
    imc.value = result
    imc.setAttribute('class', styles[result])
  } else {
    warning.innerHTML = msgAlerta
  }
}

btnImc.addEventListener('click', function() {
  calculadoraDeIMC()
})


function limparCampos() {
  alturaElemento.value = ''
  pesoElemento.value = ''
  imc.value = ''
  alturaElemento.focus()
  imc.setAttribute('class', 'form-control form-control-lg')
}

document.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    calculadoraDeIMC()
  } else if (event.key == 'Escape') {
    limparCampos()
  }
})