const stamp = document.querySelector("div.game-time p#time")
const div = document.querySelector("div.game-time")

const handle_update_time = () => {
  var stamps = {
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds()
  }

  var { hour, min, sec } = stamps

  var time = hour+ ":" +min+ ":"+ sec

  stamp.innerHTML = time
  
  if(min >= 50) clearInterval(id)

  if (min >= 1) {
    div.style.backgroundColor = "red";
    div.style.color = "white";
  }
}

const id = setInterval(handle_update_time, 1000)
