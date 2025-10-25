const n = document.getElementById("name")
const passk = document.getElementById("pass")
const passkk = document.getElementById("repass")
const enyer = document.getElementById("is")
const pasktxt = document.getElementById("btnss")
let passkshow = 0
function h() {
  user = n.value
  passbef = passk.value
  passaft = passkk.value
  checkusertaken = localStorage.getItem(user);
  if (user==="") {
    alert("You need to have a username!")
  }
  
  if (checkusertaken === null ) {
   if (passbef.length > 7) {
     if (passbef === passaft) {
       localStorage.setItem(user,passbef)
       localStorage.setItem("CurrentAcc",usernam)}
     
     else {
       alert("Did not input the same password.")
     }
   }
   
    else {
     alert("Need at least 8 Characters")
   }
  }
  
  else {
    alert("This username is taken. Make another one")
  }
  
}


window.addEventListener('input',function() {
    user = n.value
  passbef = passk.value
  passaft = passkk.value
  checkusertaken = localStorage.getItem(user);
  if (passbef.length > 7 && passbef === passaft && checkusertaken === null) {
    document.getElementById("li").setAttribute("href","login.html")
}

})

function cat() {
  if (passkshow === 0) {
  passk.setAttribute("type","")
  passkshow = 1
  pasktxt.textContent = "Hide"
  }
  else {
    passk.setAttribute("type","password")
    passkshow = 0
    pasktxt.textContent = "Show"
  }
}