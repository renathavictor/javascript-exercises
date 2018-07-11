const inputIP = document.querySelector('.ip')
const inputMask = document.querySelector('.mask')
const inputVersion = document.querySelector('.version')
const tbody = document.querySelector('tbody')
const button = document.querySelector('button')
const table = document.querySelector('.thead-light')


const enderecos = [
  {
    "ip": "192.168.0.1",
    "mask": "255.255.255.0",
    "version": "v4"
  },
  {
    "ip": "192.168.0.5",
    "mask": "255.255.255.0",
    "version": "v4"
  },
  {
    "ip": "192.168.0.7",
    "mask": "255.255.255.0",
    "version": "v4"
  },
  {
    "ip": "192.168.0.10",
    "mask": "255.255.255.0",
    "version": "v4"
  }
]

button.addEventListener('click', function (event) {
  event.preventDefault()
  colocarIps()
  inputIP.value = ''
  inputMask.value = ''
  inputVersion.value = ''
})

function colocarIps() {
  let texto = `<tr><td>${inputIP.value == '' ? '-' : inputIP.value}</td><td>${inputMask.value == '' ? '-' : inputMask.value}</td><td>${inputVersion.value == '' ? '-' : inputVersion.value}</td><td><i class="material-icons clear">clear</i><i class="material-icons create">create</i></td></tr>`
  tbody.insertAdjacentHTML('afterbegin', texto)
  tbody.firstChild.lastChild.onclick = function () {
    this.parentNode.remove()
  }
}

enderecos.forEach(e => {
  let valores = `<tr><td>${e.ip}</td><td>${e.mask}</td><td>${e.version}</td><td><i class="material-icons clear">clear</i><i class="material-icons create">create</i></td></tr>`
  tbody.insertAdjacentHTML('afterbegin', valores)
})

const clear = Array.from(document.querySelectorAll('.clear'))
const create = Array.from(document.querySelectorAll('.create'))

clear.forEach(e => e.addEventListener('click', limpar))

function limpar() {
  this.parentNode.parentNode.remove()
  console.log(tbody.childNodes)
}

create.forEach(e => e.addEventListener('click', editar))

function editar() {
  let inputTr = this.parentNode.parentNode
  const inputs = `<tr><td><input type="text" class="form-control ip" value="${inputTr.firstChild.innerHTML}" autofocus></td><td><input type="text" class="mask form-control" value="${inputTr.innerHTML}></td><td><input type="text" class="version form-control" value="${inputTr.lastChild.innerHTML}></td></tr>`  
  inputTr.innerHTML = inputs
  inputTr.addEventListener('keyup', function(event) {
    event.preventDefault()
    let texto = `<tr><td>${inputIP.value == '' ? '-' : inputIP.value}</td><td>${inputMask.value == '' ? '-' : inputMask.value}</td><td>${inputVersion.value == '' ? '-' : inputVersion.value}</td><td><i class="material-icons clear">clear</i><i class="material-icons create">create</i></td></tr>`
    if (event.key == 'Enter')
      tbody.insertAdjacentHTML('beforeend', texto)
      console.log('falhou')
  })
}

/* document.body.addEventListener('keyup', function(event) {
  event.preventDefault()
  if (event.key == 'Enter')
    colocarIps()

}) */

