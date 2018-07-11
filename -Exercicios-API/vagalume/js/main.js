const artistsHTML = document.querySelector('.artists')

let art = 'Coldplay'

function artists(art) {
  fetch(`https://www.vagalume.com.br/${art}/index.js`)
    .then(res => res.json())
    .then(json => console.log(json.pic_small))
}

/* artists(art)
 */
fetch(`https://www.vagalume.com.br/${art}/index.js`)
  .then(res => res.json())
  .then(json => {
    let texto = `<img src="${json.pic_small}" alt="${json.desc}"><div>${json}</div>`
    artistsHTML.insertAdjacentHTML('beforeend', texto)
  })