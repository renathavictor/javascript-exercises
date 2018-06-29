const result = document.querySelector('.result')
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(e => e.addEventListener('click', clickEvent))

function clickEvent(event) {
  event.target.blur()
  let button = event.target.innerHTML
  if (button === 'AC') {
    result.innerHTML = 0
  } else if (button === '=') {
    result.innerHTML = eval(result.innerHTML.replace('x', '*'))
  } else if (button === 'X') {
    result.innerHTML += 'x'
  } else if (result.innerHTML == '0' && button != '.') {
    result.innerHTML = button
  } else if (button == '+/-') {
    result.innerHTML = eval(-1 * result.innerHTML.replace('x', '*'))
  } else if (button === '%') {
    result.innerHTML = eval(result.innerHTML/100)
  }
  
  else {
    result.innerHTML += button
  }
}

document.body.addEventListener('keydown', function(event) {
  event.target.blur()
  if (event.key == 'Escape') {
    result.innerHTML = 0
  } else if (event.key === 'Enter') {
    result.innerHTML = eval(result.innerHTML.replace('x', '*'))
  } else if (event.key === 'X') {
    result.innerHTML += 'x'
  } else if (result.innerHTML == '0' && event.key != '.') {
    result.innerHTML = event.key
  } else if (event.key == '+/-') {
    result.innerHTML = eval(-1 * result.innerHTML.replace('x', '*'))
  } else if (event.key === '%') {
    result.innerHTML = eval(result.innerHTML / 100)
  } else {
    result.innerHTML += event.key
  }
})