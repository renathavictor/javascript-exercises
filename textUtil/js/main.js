const texto = document.querySelector('textarea')
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(b => b.addEventListener('click', clickEvent))

function clickEvent(event) {
  let valor = texto.value
  let acao = event.target.innerHTML
  texto.value = transforme(valor, acao)
}

function transforme(texto, acao) {
  if (acao == 'Lowercase')
    return texto.toLowerCase()
  else if (acao == 'Uppercase')
    return texto.toUpperCase()  
  else if (acao == 'Capitalize')  {
    let result = []
    texto = texto.split(' ')
    for (let t of texto) {
      let first = t[0].toUpperCase()
      let resto = t.substr(1).toLowerCase()
      result.push(first + resto)
    }
    return result.join(' ')
  } 
  else if (acao == 'Snake Case') 
    return texto.split(' ').join('_')
  else if (acao == 'Reverse')
    return texto.split('').reverse().join('')  
}
