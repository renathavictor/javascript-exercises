const tabelaCores = document.querySelector('.tabelaCores')

for (let num = 0; num < 360; num++) {
  const cor = `<div class="box" style="background: hsl(${num}, 50%, 50%)">${num}</div>`
  tabelaCores.insertAdjacentHTML('beforeend', cor)
}