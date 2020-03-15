const resultElement = document.querySelector("div#result")

var result = {
  id: 1 + Math.floor((7 - 1) * Math.random()),
  tmp: 0,
  pontuacao: 0,
  certas: 0,
  erradas: 0
}

const resx = {
  0: "enxada",
  1: "engraxate",
  3: "enxergar",
  4: "caxumba",
  5: "puxar",
  6: "xingar",
  7: "graxa",
}

const resch= {
  0: "fechadura",
  1: "cochilar",
  3: "chumaço",
  4: "chocalho",
  5: "chincho",
  6: "chiar",
  7: "facho",
}

const verificar = document.querySelector("button#verificar")
const timer = document.querySelector("#time")

const handleResultSet = () => {
  resultElement.style.display = "block"

  const user = document.querySelector("#user")
  const tempo = document.querySelector("#tempo")
  const certa = document.querySelector("#certas")
  const errada = document.querySelector("#erradas")
  const total = document.querySelector("#total")

  const { id, certas, erradas, pontuacao } = result

  user.innerHTML = id
  tempo.innerHTML = timer.innerHTML
  certa.innerHTML = certas
  errada.innerHTML = erradas
  total.innerHTML = pontuacao

}

function verify(first) {
  const veri = first.id

  if(veri === resx[0]){
    var atual = "enxada"
  }else if(veri === resx[1]){
    var atual = "engraxate"
  }else if(veri === resx[3]) {
    var atual = "enxergar"
  }else if(veri === resx[4]) {
    var atual = "caxumba"
  }else if(veri === resx[5]) {
    var atual = "puxar"
  }else if(veri === resx[6]) {
    var atual = "xingar"
  }else if (veri === resx[7]) {
    var atual = "graxa"
  }

  return atual
}

function verifyStr(first) {
  const veri = first.id

  if(veri === resch[0]){
    var atual = "fechadura"
  }else if(veri === resx[1]){
    var atual = "cochilar"
  }else if(veri === resx[3]) {
    var atual = "chumaço"
  }else if(veri === resx[4]) {
    var atual = "chocalho"
  }else if(veri === resx[5]) {
    var atual = "chimbo"
  }else if(veri === resx[6]) {
    var atual = "chiar"
  }else if (veri === resx[7]) {
    var atual = "facho"
  }

  return atual
}

const handle_verify = ({}) => {
  let first = document.querySelector("p.phase")
  const el = document.querySelector("label#res").innerHTML

  let second = document.querySelector("p.phases")
  const li = document.querySelector("label#resch").innerHTML

  // formatando segunda phase
  var texto = second.innerHTML
  var tetf = texto.indexOf("<")
  var tetl = texto.lastIndexOf(">")
  var stri = texto.substring(tetf, tetl+1)
  var tests = texto.replace(`${stri}`, "-")
  var original = tests.replace("-", `${li}`)
  console.log(original)

  // formatando primeira phase
  var txt = first.innerHTML
  var fst = txt.indexOf("<")
  var lst = txt.lastIndexOf(">")
  var str = txt.substring(fst, lst+1)
  var test = txt.replace(`${str}`, "-")
  var origin = test.replace("-", `${el}`)
  console.log(origin)

  const f = verify(first)
  const s = verifyStr(second)

  if(s === original) {
    const p = document.querySelector(`p.phases`)
    p.style.background = "blue"

    result.certas += 1
    result.pontuacao += 5

    handleResultSet()
  }else {
    const p = document.querySelector(`p.phases`)
    p.style.background = "red"

    result.erradas += 1
    result.pontuacao -= 5
    if(result.pontuacao <= 0) result.pontuacao = 0

    handleResultSet()
  }

  if (f === origin) {
    const p = document.querySelector(`p#${origin}.phase`)
    p.style.background = "blue"

    result.certas += 1
    result.pontuacao += 5

    handleResultSet()
  }else {
    const p = document.querySelectorAll("p.phase")[0]
    p.style.background = "red"

    result.erradas += 1
    result.pontuacao -= 5
    if(result.pontuacao <= 0) result.pontuacao = 0

    handleResultSet()
  }
}

window.onload = verificar.addEventListener('click', handle_verify)
