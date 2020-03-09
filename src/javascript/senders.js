
const rules = "Cada acerto vale 5 pontos. acertando as duas questões da rodada fica com 10 pontos."

window.onload = () => {
  
}

const user = {
  id: Math.random(),
  point: 0,
  acerts: 0,
  errors: 0,
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
  3: "chocalho",
  4: "chincho",
  5: "chiar",
  6: "facho",
  7: "cheio",
}

const verificar = document.querySelector("button#verificar")

function verify(first) {
  const veri = first.id
  const idx = resx[0]
  if(veri === idx) return veri
  return false
}

const handle_verify = ({}) => {
  let first = document.querySelector("p.phase")
  const el = document.querySelector("label#res").innerHTML

  var txt = first.innerHTML

  var fst = txt.indexOf("<")
  var lst = txt.lastIndexOf(">")
  var str = txt.substring(fst, lst+1)

  var test = txt.replace(`${str}`, "-")
  var origin = test.replace("-", `${el}`)

  const f = verify(first)

  if (f === origin) {
    const p = document.querySelector(`p#${origin}.phase`)
    p.style.background = "blue"
  }else {
    const p = document.querySelectorAll("p.phase")[0]
    p.style.background = "red"
  }

  console.log(f + origin)

  // console.log(fst)
  // console.log(lst)
  // console.log(txt)
  // console.log(str)

}

window.onload = verificar.addEventListener('click', handle_verify)
