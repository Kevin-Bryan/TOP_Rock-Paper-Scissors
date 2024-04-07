function playRound(playerSelection, computerSelection) {
  // your code here!
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (computerSelection === "rock"){
    return "It is a Tie";

  }
  else if (computerSelection === "paper"){
    return "You Lose";

  }
  else if (computerSelection === "scissor"){
    return "You Win";

  }

}

function getComputerChoice(){
    arr = ["Rock","Scissor","Paper"];
    const index  = Math.floor(Math.random() * 3);
    return arr[index];


}
let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

for (i=0; i<=4; i++){
    playerSelection = prompt("Choose your Move")
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = getComputerChoice();
    
    
}