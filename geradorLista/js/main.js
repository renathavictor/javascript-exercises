const valor = document.querySelector('input[type=text]')
const btn = document.querySelector('button')
const ul = document.querySelector('ul')


function criarLista() {
  let num = valor.value 
  for (let i = 1; i <= num; i++) {
    ul.insertAdjacentHTML('beforeend', `<li>Item ${i}</li>`)
  }
  valor.value = ''
}

btn.addEventListener('click', function() {
  criarLista()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    ul.innerHTML = ''
    criarLista()
  } else if (event.key == 'Escape') {
    ul.innerHTML = ''
  }
})