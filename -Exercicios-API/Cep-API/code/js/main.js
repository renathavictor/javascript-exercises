const cep = document.querySelector('#cep')
const street = document.querySelector('#street')
const number = document.querySelector('#number')
const bairro = document.querySelector('#neighborhood')
const state = document.querySelector('#state')
const city = document.querySelector('#city')


cep.addEventListener('blur', function() {
  let url = `https://viacep.com.br/ws/${cep.value}/json/`
  fetch(url)
    .then(res => res.json())
    .then(json => colocarCampos(json))
})

function colocarCampos(json) {
  street.value = json.logradouro  
  bairro.value = json.bairro
  state.value = json.uf
  city.value = json.localidade
  number.focus()  
}

document.addEventListener('keyup', (event) => {
  if (event.key == 'Escape') {
    street.value = ''
    bairro.value = ''
    state.value = ''
    city.value = ''
    number.value = ''
    cep.value = ''
    cep.focus()  
  }
})