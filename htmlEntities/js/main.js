const entities = {
  "&Aacute;": { "codepoints": [193], "characters": "\u00C1" },
  "&Aacute": { "codepoints": [193], "characters": "\u00C1" },
  "&aacute;": { "codepoints": [225], "characters": "\u00E1" },
  "&aacute": { "codepoints": [225], "characters": "\u00E1" },
  "&Abreve;": { "codepoints": [258], "characters": "\u0102" },
  "&abreve;": { "codepoints": [259], "characters": "\u0103" },
  "&ac;": { "codepoints": [8766], "characters": "\u223E" },
  "&acd;": { "codepoints": [8767], "characters": "\u223F" },
  "&acE;": { "codepoints": [8766, 819], "characters": "\u223E\u0333" },
  "&Acirc;": { "codepoints": [194], "characters": "\u00C2" },
  "&Acirc": { "codepoints": [194], "characters": "\u00C2" },
  "&acirc;": { "codepoints": [226], "characters": "\u00E2" },
  "&acirc": { "codepoints": [226], "characters": "\u00E2" },
  "&acute;": { "codepoints": [180], "characters": "\u00B4" },
  "&acute": { "codepoints": [180], "characters": "\u00B4" },
  "&Acy;": { "codepoints": [1040], "characters": "\u0410" },
  "&acy;": { "codepoints": [1072], "characters": "\u0430" },
  "&AElig;": { "codepoints": [198], "characters": "\u00C6" },
  "&AElig": { "codepoints": [198], "characters": "\u00C6" },
  "&aelig;": { "codepoints": [230], "characters": "\u00E6" },
  "&aelig": { "codepoints": [230], "characters": "\u00E6" },
  "&af;": { "codepoints": [8289], "characters": "\u2061" },
  "&Afr;": { "codepoints": [120068], "characters": "\uD835\uDD04" },
  "&afr;": { "codepoints": [120094], "characters": "\uD835\uDD1E" },
  "&Agrave;": { "codepoints": [192], "characters": "\u00C0" },
  "&Agrave": { "codepoints": [192], "characters": "\u00C0" },
  "&agrave;": { "codepoints": [224], "characters": "\u00E0" },
  "&agrave": { "codepoints": [224], "characters": "\u00E0" },
  "&alefsym;": { "codepoints": [8501], "characters": "\u2135" },
  "&aleph;": { "codepoints": [8501], "characters": "\u2135" },
  "&Alpha;": { "codepoints": [913], "characters": "\u0391" },
  "&alpha;": { "codepoints": [945], "characters": "\u03B1" },
  "&Amacr;": { "codepoints": [256], "characters": "\u0100" },
  "&amacr;": { "codepoints": [257], "characters": "\u0101" },
  "&amalg;": { "codepoints": [10815], "characters": "\u2A3F" },
  "&amp;": { "codepoints": [38], "characters": "\u0026" },
  "&amp": { "codepoints": [38], "characters": "\u0026" },
  "&AMP;": { "codepoints": [38], "characters": "\u0026" },
  "&AMP": { "codepoints": [38], "characters": "\u0026" },
  "&andand;": { "codepoints": [10837], "characters": "\u2A55" }
}

const ent = document.querySelector('.tabela')

for (let key in entities) {
  const nome = 
  `<div class="tbl text-center">
    <div class="cart-title"><h1>${key}</h1></div>
    <div>${key.replace('&', '&amp')}</div>
  </div>`
  ent.insertAdjacentHTML('beforeend', nome)
  console.log(nome)
}