const apk = document.querySelector("div#Apk")
const show = document.querySelector("button#show")


const handle_click = () => {
  const x = apk.style.display == "block" ? true : false
  if(x) {
    apk.style.display = "none"
    console.log(apk.style.display)
  }else {
    apk.style.display = "block"
    console.log(apk.style.display)
  }

  return 0
}

const handle_show = () => {
  show.addEventListener('click', handle_click)
}
handle_show()
