function result(){
var age = document.getElementById("age").value;
if(age >18){
    alert("you are over 18");
}
else if (age==18){
    alert("you are exactly 18")
}
else{
    alert("you are under 18");
}
}