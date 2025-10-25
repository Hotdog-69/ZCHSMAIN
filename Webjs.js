lvl = 1
window.onload = function() {
 accname = localStorage.getItem("CurrentAcc")
 accsav = accname + "save"
 lvl = localStorage.getItem(accsav) || 1
  accimgname = accname + "-profile.jpg"
  if (accname===null) {
    window.open("login.html","_self")
  }
  if (localStorage.getItem(accsav) === null) {
    localStorage.setItem(accsav,"3")
    localStorage.setItem(accbg,"1")
  }
 censoring()
}


function censoring() {
if (lvl>1) {
  const censors1 = document.querySelectorAll(".censor1")
  censors1.forEach(element => {element.textContent = ""})
  censors1.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>2) {
  const censors2 = document.querySelectorAll(".censor2")
  censors2.forEach(element => {element.textContent = ""})
  censors2.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>3) {
  const censors3 = document.querySelectorAll(".censor3")
  censors3.forEach(element => {element.textContent = ""})
  censors3.forEach(element => {element.setAttribute("color","red")})
}}



