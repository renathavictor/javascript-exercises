const posts = document.querySelector('#posts')

/* for (let i = 1; i < 9; i++) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then(res => res.json())
    .then(json => {
      let texto = `<span>${json.id}</span><h2>${json.title}</h2><p>${json.body}</p>`
      posts.insertAdjacentHTML('beforeend', texto)
    })
}
 */


fetch(`https://jsonplaceholder.typicode.com/posts/`)
  .then(res => res.json())
  .then(json => {
    let post = json.slice(0, 8)
    for (let p of post) {
      let num = p.id < 10 ? `0${p.id}` : p.id
      let texto = `<div class="msg"><span class="blue">#${num}</span><h2 class="blue">${p.title}</h2><p>${p.body}</p></div>`
      posts.insertAdjacentHTML('beforeend', texto)
    }
  })

