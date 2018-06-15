const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

function gerarLista() {
  const num = input.value
  for (let n = 1; n <= num; n++) {
    ul.insertAdjacentHTML('beforeend', `<li>Item ${n}</li>`)
  }
  input.value = ''
}

button.addEventListener('click', function() {
  gerarLista()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    gerarLista()
  }
})