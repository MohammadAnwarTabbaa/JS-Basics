var element1 = document.querySelector('#image1');
var element2 = document.querySelector('#image2');
var element3 = document.querySelector('#image3');
var element4 = document.querySelector('#image4');
var element5 = document.querySelector('#image5');

document.addEventListener('mouseover', event =>{
    if(event.target==element1){
        element1.src="images/image1_2.jpg";
    }
    else if(event.target==element2){
        element2.src="images/image2_2.jpg";
    }
    else if(event.target==element3){
        element3.src="images/image3_2.jpg";
    }
    else if(event.target==element4){
        element4.src="images/image4_2.jpg";
    }
    else if(event.target==element5){
        element5.src="images/image5_2.jpg";
    }
} )

document.addEventListener('mouseout', event =>{
    if(event.target==element1){
        element1.src="images/image1.jpg";
    }
    else if(event.target==element2){
        element2.src="images/image2.jpg";
    }
    else if(event.target==element3){
        element3.src="images/image3.jpg";
    }
    else if(event.target==element4){
        element4.src="images/image4.jpg";
    }
    else if(event.target==element5){
        element5.src="images/image5.jpg";
    }
} )