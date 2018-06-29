const alturaElemento = document.querySelector('input[name=altura]')
const pesoElemento = document.querySelector('input[name=peso]')
const bmiElemento = document.querySelector('#imc')
const buttonImc = document.querySelector('#calc-imc-btn')
const alerta = document.querySelector('#warning')


function bmi(altura, peso, sexo) {
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

const classesImc = { 
  'Abaixo do Peso': 'border border-warning bg-warning text-white', 
  'Peso Normal':'border border-sucess bg-success text-white', 
  'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
  'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
  'Obeso': 'border border-danger bg-danger text-white'
}

const msgAviso = `
  <div class="alert alert-warning" role="alert">
    <strong>Antes de calcular informe o peso e a altura.</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
`
function validaçãoImc(altura, peso) {
  if (isNaN(altura) || altura < 1 || isNaN(peso) || peso < 1)
    return false
  return true
}

function bmiCalc() {
  let altura = alturaElemento.value
  let peso = pesoElemento.value
  const sexo = document.querySelector('input[name=sexo]:checked').value
  altura = altura.replace(',', '.')
  peso = peso.replace(',', '.')
  if (validaçãoImc(altura, peso)) {
    let result = bmi(altura, peso, sexo)
    bmiElemento.setAttribute('class', 'form-control form-control-lg' +  classesImc[result])
    bmiElemento.value = result
  } else {
    alerta.innerHTML = msgAviso
  }
}

buttonImc.addEventListener('click', function() {
  bmiCalc()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Escape') {
    bmiElemento.value = ''
    alturaElemento.value = ''
    pesoElemento.value = ''
    bmiElemento.setAttribute('class', 'form-control form-control-lg')
    alturaElemento.focus()
  } else if (event.key == 'Enter') {
    bmiCalc()
  }
})

