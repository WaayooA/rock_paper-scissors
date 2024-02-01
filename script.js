
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

    //if we tie the round return 0

    if(playerSelection === computerSelection){
        console.log("player: " + playerSelection + "  VS  " + "Computer: " + computerSelection + "    This is a tie");
        return 0;
    }

    //if player wins return 1

    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        
        console.log("player: " + playerSelection + "  VS  " + "Computer: " + computerSelection + "    You win");
        return 1;

    }

    //If computer wins return 2

    else{

        console.log("player: " + playerSelection + "  VS  " + "Computer: " + computerSelection + "    Computer wins");
        return 2;

    }

}

// This function will control de score and every round, well play the best of 5

function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    let trackWinner = 0;

    console.log("Rock,Paper,Scissors the best of 5")

    for(let i = 0; i < 5; i++){
        console.log("Player Score: " + playerScore + "           Computer Score: " + computerScore);
        trackWinner =  playRound(getPlayerSelection(),getComputerChoice());

        if(trackWinner === 0){
            --i;
        }
        else if(trackWinner === 1){
            ++playerScore;
        }
        else{
            ++computerScore;
        }

    }

    console.log("Player Score: " + playerScore + "           Computer Score: " + computerScore);
    
    if(playerScore > computerScore){
        
        console.log("You won!");

    }
    else{

        console.log("Computer wins");

    }

}


playGame();