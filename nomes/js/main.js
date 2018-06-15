const namesUL = document.querySelector('.nomes')
const input = document.querySelector('input')
const button = document.querySelector('button')

const names = ['Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page', 'Sergey Brin']

function addNome() {
  let nome = input.value
  namesUL.insertAdjacentHTML('beforeend', `<li>${nome}</li>`)
  input.value = ''
}

namesUL.innerHTML = names.map(e => `<li>${e}</li>`).join('')
button.addEventListener('click', function () {
  addNome()
})

document.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    addNome()
  }
})