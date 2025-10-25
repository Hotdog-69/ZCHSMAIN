let passkshow = sys = document.getElementById("sui")
function ente() {
  usernam = document.getElementById("username").value
  attpassword = document.getElementById("password").value
  realpassword = localStorage.getItem(usernam)
  if (realpassword===null) {
    alert("The account does not exist")
  }
  else {if (attpassword===realpassword) {
  localStorage.setItem("CurrentAcc",usernam)}
          else {
             alert("Wrong Password!")
  }}
}

window.addEventListener('input',function() {
     usernam = document.getElementById("username").value
  attpassword = document.getElementById("password").value
  realpassword = localStorage.getItem(usernam)
  if (attpassword.length > 7 &&  attpassword === realpassword ) {
    document.getElementById("li").setAttribute("href","Homm.html")
}
  else {document.getElementById("li").setAttribute("href","")}
})

function unsi() {
  if (passkshow === 0) {
  document.getElementById("password").setAttribute("type","")
  passkshow = 1
  sui.textContent = "Hide"
  }
  else {
    document.getElementById("password").setAttribute("type","password")
    passkshow = 0
    sui.textContent = "Show"
  }
}
