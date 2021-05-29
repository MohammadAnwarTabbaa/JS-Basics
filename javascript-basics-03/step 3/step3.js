var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var para = document.querySelector(" p ");

document.addEventListener('click',event=>{
    
    if(event.target==green){
     para.style.color="green";
    }
    else if(event.target==red){
        para.style.color="red";
    }
    else if(event.target==blue){
        para.style.color="blue";
    }
})