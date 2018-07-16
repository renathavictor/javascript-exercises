const repo1 = document.querySelector('#repo1')
const repo2 = document.querySelector('#repo2')
const btn = document.querySelector('button')

const project = document.querySelector('.project')
const commy = document.querySelector('.commy')
const code = document.querySelector('.code')

btn.addEventListener('click', repos)

function compare() {
  
}

// Repositorios

function repos() {
  
  let r1 = repo1.value
  r1 = r1.replace('https://github.com/', '').split('/')
  let r2 = repo2.value
  r2 = r2.replace('https://github.com/', '').split('/')
  projectText(r2)
  projectText(r1)
}

function projectText(r) {
  let now = new Date
  fetch(`https://api.github.com/repos/${r[0]}/${r[1]}`)
    .then(res => res.json())
    .then(json => {
      let year = json.created_at
      year = year.match(/\d{4}-\d{2}-\d{2}/).join('').split('-')
      let texto = `<div><p>${json.name}</p><p>${json.owner.login}</p><p>${year[2]}/${year[1]}/${year[0]}</p><p>over ${now.getFullYear() - year[0]} years</p></div>`
      project.insertAdjacentHTML('beforeend', texto)
    })
}

/* function repos() {
  let r1 = repo1.value
  r1 = r1.replace('https://github.com/', '').split('/')
  let r2 = repo2.value
  r2 = r2.replace('https://github.com/', '').split('/')
  let now = new Date
  fetch(`https://api.github.com/repos/${r1[0]}/${r1[1]}`)
      .then(res => res.json())
      .then(json => {
        let year = json.created_at
        year = year.match(/\d{4}-\d{2}-\d{2}/).join('').split('-')
        let texto = `<div><p>${json.name}</p><p>${json.owner.login}</p><p></p><p>over ${now.getFullYear() - year[0]} years</p></div>`
        project.insertAdjacentHTML('beforeend', texto)
      })
} */

/* 
`https://api.github.com/repos/${owner}/${repo}`
`https://api.github.com/repos/${owner}/${repo}/languages`
`https://api.github.com/repos/${owner}/${repo}/contributors`
`https://api.github.com/repos/${owner}/${repo}/commits`  */