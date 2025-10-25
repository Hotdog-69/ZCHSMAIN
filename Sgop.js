lvl = 1
bgclr=1
window.onload = function() {
 accname = localStorage.getItem("CurrentAcc")
  accimgname = accname + "-profile.jpg"
  accsav = accname + "save"
  accbg = accname + "bg"
  lvl = localStorage.getItem(accsav) || 1
  bgclr = localStorage.getItem(accbg) || 1
  if (accname===null) {
    window.open("login.html","_self")
  }
  if (localStorage.getItem(accsav) === null) {
    localStorage.setItem(accsav,"3")
    localStorage.setItem(accbg,"1")
  }
  document.getElementById("naymar").setAttribute("src",accimgname)
  document.getElementById("user").textContent =
  accname
 censoring()
 checking()
 bgcolorg()
}

function sets() {
  lvl = document.querySelector('input[name="cent"]:checked').value;
  localStorage.setItem(accsav,lvl)
  bgclr = document.querySelector('input[name="Sm"]:checked').value;
  localStorage.setItem(accbg,bgclr)
  bgcolorg()
}

function gt() {
 lvl = localStorage.getItem("o");
}

function censoring() {
if (lvl>1) {
  const censors1 = document.querySelectorAll(".censor1")
  censors1.forEach(element => {element.textContent = "- REDACTED -"})
  censors1.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>2) {
  const censors2 = document.querySelectorAll(".censor2")
  censors2.forEach(element => {element.textContent = "- REDACTED -"})
  censors2.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>3) {
  const censors3 = document.querySelectorAll(".censor3")
  censors3.forEach(element => {element.textContent = "- REDACTED -"})
  censors3.forEach(element => {element.setAttribute("color","red")})
}}

function checking() {
document.querySelector('input[name="cent"][value="' +lvl+ '"]').checked = true;
document.querySelector('input[name="Sm"][value="' +bgclr+ '"]').checked = true;
}

function bgcolorg() {
  if (bgclr===2) {
    document.getElementById("txtclr").setAttribute("style","color:white;")
    document.getElementById("bg").setAttribute("style","background-color:rgb(50,50,50);")
  }
  
  else {
    document.getElementById("txtclr").setAttribute("style","")
    document.getElementById("bg").setAttribute("style","")
  }
  
}

function out() {
  localStorage.removeItem("CurrentAcc")
  localStorage.setItem(accsav,lvl)
  localStorage.setItem(accbg,bgclr)
}


