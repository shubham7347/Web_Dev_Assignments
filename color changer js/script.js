const btn=document.getElementById("button")
const randomcolor=() =>{
    let val="0123456789ABCDEF"
    let cons="#"
    for(let i=0;i<6;i++){
        cons=cons+ val[Math.floor(Math.random()*16)]

    }
    return cons
}

//console.log(randomcolor)

function changeRandomcolor(){
    document.body.style.backgroundColor=randomcolor();

}
btn.addEventListener("click",changeRandomcolor)