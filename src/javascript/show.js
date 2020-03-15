'use-struct'

const apk = document.querySelector("div#Apk")
const show = document.querySelector("button#show")
const app = document.querySelector("div#App")

const test = () => {
  apk.style.display = "block"
  app.style.visibility = "hidden"
}
test()

setTimeout(test, 000)

const handle_click = () => {
  const x = apk.style.display == "block" ? true : false
  if(x) {
    apk.style.display = "none"
    app.style.visibility = "visible"
  }else {
    apk.style.display = "block"
    app.style.visibility = "hidden"
    console.log(apk.style.display)
  }

  return 0
}

const handle_show = () => {
  show.addEventListener('click', handle_click)
}
handle_show()
