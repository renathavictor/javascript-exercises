const buttons = Array.from(document.querySelectorAll('button'))
const result = document.querySelector('.wrapper h1')

buttons.forEach(b => b.addEventListener('click', clickEvent))

function clickEvent(event) {
  event.target.blur()
  let button = event.target.innerHTML
  if (button == 'AC')
    result.innerHTML = 0
  else if (button == '+/-')
    result.innerHTML = eval(-1 * (result.innerHTML.replace('x', '*')))
  else if (button == '%')
    result.innerHTML = eval(result.innerHTML / 100)
  else if (button == 'X')
    result.innerHTML += 'x'
  else if (button == '=')
    result.innerHTML = eval(result.innerHTML.replace('x', '*'))
  else if (result.innerHTML == '0' && button != '.')
    result.innerHTML = button 
  else if ('0123456789+-/.'.includes(button))
    result.innerHTML += button  
}

document.body.addEventListener('keydown', function(event) {
  event.target.blur()
  if (event.key == 'Escape')
    result.innerHTML = 0
  else if (event.key == 'Enter')
    result.innerHTML = eval(result.innerHTML.replace('x', '*'))  
  else if ('0123456789-+/'.includes(event.key))
    result.innerHTML += event.key
  else if (event.key == '%')
    result.innerHTML = eval(result.innerHTML / 100)
  else if (result.innerHTML == '0' && event.key != '.')
    result.innerHTML = event.key 
})