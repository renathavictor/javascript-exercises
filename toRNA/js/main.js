const dnaElement = document.querySelector('input[name=dna]')
const rnaElement = document.querySelector('#rna')

function toRna() {
  let dna = dnaElement.value 
  dna = dna.split('')
  let complement = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  let result = dna.map(e => complement[e] ? complement[e] : 'Não é').join('')

  return rnaElement.value = result
}

