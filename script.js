
// Make function to make the computer choose randomly
// Make a function that play a round between the player and the computer
// 

function getComputerChoice() {

    const min = 1;
    const max = 3;
    let randomNumber = 0;
    randomNumber = Math.floor(min + (max-min+1)*Math.random()); 

    if(randomNumber === 1){
        return "rock";
    }
    else if(randomNumber === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getPlayerSelection(){

    let input = "";
    input = prompt("Write rock, paper or scissors");
    input = input.toLowerCase().trim();

    if(input === "rock" || input === "paper" || input === "scissors"){
    
        return input;

    }
    else {
        console.log("You type incorrectly");
    }
}

function playRound(playerSelection,computerSelection){

    if(playerSelection === computerSelection){
        console.log("player: " + playerSelection + "  VS  " + "Computer: " + computerSelection + "    This is a tie");
    }
    else if(playerSelection === "rock"){
        
    }

}

playRound(getPlayerSelection(),getComputerChoice());