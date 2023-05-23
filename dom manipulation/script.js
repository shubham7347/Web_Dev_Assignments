let var1=document.getElementById("one")
console.log(var1.innerText)

let var2= document.getElementsByClassName("tech")
console.log(var2[2].innerText)

var2[1].innerText="nodejs";

let var3=document.getElementsByTagName("h4")
console.log(var3[1].innerText)

var3[2].innerText="pw skills"
var3[2].style.color="red"