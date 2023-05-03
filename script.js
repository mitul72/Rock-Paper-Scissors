const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
  
function getComputerChoice(){
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
      ];
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
} 


function rockSelected() {
    const computerSelection = getComputerChoice();  
    if (computerSelection === "Scissors")
        document.getElementById("score1").innerHTML = parseInt(document.getElementById("score1").innerHTML)+1; 
    else if (computerSelection === "Rock") ;
    else
        document.getElementById("score2").innerHTML = parseInt(document.getElementById("score2").innerHTML)+1; 
    
    document.getElementById("selection").innerHTML = computerSelection;
    playerWon()
    computerWon();
}

function paperSelected() {
    const computerSelection = getComputerChoice();  
    if (computerSelection === "Rock")
        document.getElementById("score1").innerHTML = parseInt(document.getElementById("score1").innerHTML)+1; 
    else if (computerSelection === "Paper") ;
    else
        document.getElementById("score2").innerHTML = parseInt(document.getElementById("score2").innerHTML)+1; 

    document.getElementById("selection").innerHTML = computerSelection;
    playerWon()
    computerWon();
}

function scissorsSelected() {
    const computerSelection = getComputerChoice();  
    if (computerSelection === "Paper")
        document.getElementById("score1").innerHTML = parseInt(document.getElementById("score1").innerHTML)+1; 
    else if (computerSelection === "Scissors") ;
    else
        document.getElementById("score2").innerHTML = parseInt(document.getElementById("score2").innerHTML)+1; 

    document.getElementById("selection").innerHTML = computerSelection;
    playerWon();
    computerWon();
}

function playerWon() {
    if (parseInt(document.getElementById("score1").innerHTML) ===  5) {
        document.location.href = "views/winningScreen.html";
    }
}

function computerWon() {
    if (parseInt(document.getElementById("score2").innerHTML) ===  5) {
        document.location.href = "views/losingScreen.html";
    }
}


rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);
scissors.addEventListener("click", scissorsSelected);

