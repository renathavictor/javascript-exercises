const inputIpAddress = document.querySelector('#inputIpAddress')
const btnGetIp = document.querySelector('#btnGetIp')
const tbody = document.querySelector('tbody')
const clear = Array.from(document.querySelectorAll('.clear'))


btnGetIp.addEventListener('click', function() {
  adicionarEndereco()
})

function adicionarEndereco() {
  let url = `https://ipinfo.io/${inputIpAddress.value}/json`
  fetch(url)
    .then(res => res.json())
    .then(json => transformeJson(json))  
}

function transformeJson(json) {
  let texto = `<tr><td>${inputIpAddress.value}</td><td>${json.org}</td><td>${json.country}</td><td>${json.city}</td><td class="clear"><a href="#"><i class="fa fa-times" style="font-size: 22px;"></i></a></td></tr>`
  tbody.insertAdjacentHTML('afterbegin', texto)
  tbody.firstChild.lastChild.onclick = function() {
    this.parentNode.remove()
  }
}

clear.forEach(e => e.addEventListener('click', function () {
  this.parentNode.remove()
}))  


/* function adicionarEndereco() {
  let url = `https://ipinfo.io/${inputIpAddress.value}/json`
  fetch(url)
    .then(res => res.json())
    .then(json => {
      let texto = `<tr><td>${inputIpAddress.value}</td><td>${json.org}</td><td>${json.country}</td><td>${json.city}</td><td class="clear"><a href="#"><i class="fa fa-times" style="font-size: 22px;"></i></a></td></tr>`
      tbody.insertAdjacentHTML('afterbegin', texto)
    })  
  tbody.on('click', '.clear', ) 
}
 */
