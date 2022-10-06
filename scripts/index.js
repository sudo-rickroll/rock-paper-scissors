let choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function displayString(returnString="", selections={}){
    let { playerSelection, computerSelection } = selections
    if(returnString === "player"){
        console.log(`You Win this round! ${playerSelection} beats ${computerSelection}`)
    }
    else if(returnString === "computer") {
        console.log(`You Lose this round! ${playerSelection} is beaten by ${computerSelection}`)
    }
    else {
        console.log("You need to pick a value!")
    }
    return returnString
}

function playRound(playerSelection = "", computerSelection = getComputerChoice()){

    playerSelection = playerSelection.toLowerCase()

    while(playerSelection === computerSelection.toLowerCase()){
        computerSelection = getComputerChoice()
    }

    computerSelection = computerSelection.toLowerCase()
    let selections = { playerSelection, computerSelection }

    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper"){
                return displayString("computer", selections)
            }
            else{
                return displayString("player", selections)
            }

        case "paper":
            if(computerSelection === "scissors"){
                return displayString("computer", selections)
            }
            else{
                return displayString("player", selections)
            }

        case "scissors":
            if(computerSelection === "rock"){
                return displayString("computer", selections)
            }
            else{
                return displayString("player", selections)
            }

        default:
            return displayString()
    }
}

function game(times=1){

    let playerWins = 0;
    let computerWins = 0;
    let roundWinner = "";

    for(let round = 0; round < times; round++){
        console.log(`Round ${round+1} begins!`)

        let playerInput = prompt("Please enter your option - Rock, Paper or Scissors");
        roundWinner = playRound(playerInput)

        switch (roundWinner){
            case "player":
                playerWins += 1;
                break;
            case "computer":
                computerWins += 1;
                break;
        }
    }

    if (playerWins > computerWins){
        return `Player wins this ${times} round match by ${playerWins} to ${computerWins}!`
    }
    else if (playerWins < computerWins){
        return `Computer wins this ${times} round match by ${computerWins} to ${playerWins}!`
    }
    else {
        return `Match drawn!`
    }
}

console.log(game(5))