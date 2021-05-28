function validation(){
    var shoeSize = document.getElementById("shoe_size").value;
    var year= document.getElementById("year").value;
    alert("the result is :" +result(shoeSize,year));

}
function result(x,y){
    x = x*2 ; 
    x=x+5 ;
    x=x*50;
    x=x-y;
    x=x+1766 
    return x ;

} 