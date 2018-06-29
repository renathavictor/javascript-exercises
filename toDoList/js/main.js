const pegarTexto = document.querySelector('input[type=text]')
const button = document.querySelector('button')
const topUl = document.querySelector('.top')
const normalUl = document.querySelector('.normal')
const checkbox = document.querySelector('input[type=checkbox]')
const qtdLetras = document.querySelector('.qtd-letras')


button.addEventListener('click', function() {
  tratarTexto()
})

function tratarTexto() {
  let texto = `<li><span>${pegarTexto.value}</span><span class="close">&times;</span></li>`
  let marcado = checkbox.checked ? topUl : normalUl
  marcado.insertAdjacentHTML('afterbegin', texto)
  marcado.firstChild.lastChild.onclick = function () {
    this.parentNode.remove()
  }
  pegarTexto.value = '' 
  checkbox.checked = false 
}

pegarTexto.addEventListener('keyup', function() {
  let qtd = 40 - parseInt(pegarTexto.value.length)
  qtdLetras.innerHTML = qtd
  if (qtd < 0)
    qtdLetras.setAttribute('style', 'color: red')
  else if (qtd < 5)
    qtdLetras.setAttribute('style', 'color: yellow')
  else
    qtdLetras.setAttribute('style', 'color: black')
})

document.body.addEventListener('keyup', function(event) {
  if (event.key == 'Enter')
    tratarTexto()
})