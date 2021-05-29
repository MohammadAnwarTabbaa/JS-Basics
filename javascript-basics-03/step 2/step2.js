var show = document.getElementById("show");
var hide = document.getElementById("hide");
var para = document.querySelector(" p ");

document.addEventListener('click',event=>{
    
    if(event.target==show){
     para.style.display="";
    }
    else if(event.target==hide){
        para.style.display="none";
    }
})