function reminder(){
    var firstNumber = document.getElementById("first_number").value;
    var secondNumber= document.getElementById("second_number").value;
    var reminder;
    var reminder=(firstNumber % secondNumber);
    alert("reminder ="+ reminder) ; 
    
    }