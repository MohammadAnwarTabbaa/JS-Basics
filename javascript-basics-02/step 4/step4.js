var reset= document.querySelector("button");


reset.addEventListener("click",clear);

function clear(){
    var r =confirm("do you want to clear all fields");
    if(r==true){
        var name = document.querySelectorAll("input[type=text]");
        var i ;
        for(i=0 ; i<name.length;i++){
            name[i].value="";
            
        }
        
        }
    
}
