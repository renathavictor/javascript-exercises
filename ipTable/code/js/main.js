const inputIP = document.querySelector('#ip')
const inputMask = document.querySelector('#mask')
const inputVersion = document.querySelector('#version')
const tbody = document.querySelector('tbody')
const button = document.querySelector('button')
const table = document.querySelector('.table')

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

enderecos.forEach(e => {
  let valores = `
  <tr>
    <td>${e.ip}</td>
    <td>${e.mask}</td>
    <td>${e.version}</td>
    <td><i class="material-icons clear">clear</i><i class="material-icons create">create</i></td>
  </tr>`
  tbody.insertAdjacentHTML('afterbegin', valores)
})


button.addEventListener('click', function() {
  colocarIps()
})

function colocarIps() {

}

table.addEventListener('click', function() {
  console.log('pegou')
})