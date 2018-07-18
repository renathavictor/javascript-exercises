const repo1 = document.querySelector('#repo1')
const repo2 = document.querySelector('#repo2')
const btn = document.querySelector('button')

const project = document.querySelector('.project')
const commy = document.querySelector('.commy')
const code = document.querySelector('.code')

btn.addEventListener('click', repos)

// Repositorios

function repos() {
  
  let r1 = repo1.value
  r1 = r1.replace('https://github.com/', '').split('/')
  let r2 = repo2.value
  r2 = r2.replace('https://github.com/', '').split('/')
  project.innerHTML = `<h2>Project</h2>`
  commy.innerHTML = `<h2>Community</h2>`
  code.innerHTML = `<h2>Code</h2>`
  projectText(r1)
  projectText(r2)
  project.insertAdjacentHTML('afterend', '<hr>')
  commy.insertAdjacentHTML('afterend', '<hr>')
}

function projectText(r) {
  let now = new Date
  fetch(`https://api.github.com/repos/${r[0]}/${r[1]}`)
    .then(res => res.json())
    .then(json => {
      let year = json.created_at
      year = year.match(/\d{4}-\d{2}-\d{2}/).join('').split('-')
      let texto1 = `<div><p class="repos-name"><a href="https://github.com/${r[0]}/${r[1]}" target="_blank">${json.name}</a></p><p><i class="fas fa-user"></i> <a href="https://github.com/${r[0]}" target="_blank">${json.owner.login}</a></p><p><i class="far fa-circle"></i> ${year[2]}/${year[1]}/${year[0]}</p><p><i class="fas fa-sync-alt"></i> over ${now.getFullYear() - year[0]} years</p></div>`
      project.insertAdjacentHTML('beforeend', texto1)
      let texto2 = `<div><p><i class="fas fa-star"></i> <a href="https://github.com/${r[0]}/${r[1]}/stargazers">${json.stargazers_count}</a> <i class="fas fa-code-branch"></i> <a href="https://github.com/${r[0]}/${r[1]}/network">${json.forks}</a></p></div>`
      commy.insertAdjacentHTML('beforeend', texto2)
    })
  fetch(`https://api.github.com/repos/${r[0]}/${r[1]}/commits`)
    .then(res => res.json())
    .then(json => {
      let texto3 = `<p><a href="https://github.com/${r[0]}/${r[1]}/commits" target="_blank">${json.length}</a> commits</p>`
      code.insertAdjacentHTML('beforeend', texto3)
    })
  fetch(`https://api.github.com/repos/${r[0]}/${r[1]}/languages`)
    .then(res => res.json())
    .then(json => {
      let langue = ''
      for (let k in json) {
        langue += `${k}: ${json[k]/100}%, `
      }
      langue = langue.replace(/, $/, '')
      
      code.insertAdjacentHTML('beforeend', langue)
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