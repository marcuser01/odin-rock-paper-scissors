function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      random = 'rock';
      break;
    case 1:
      random = 'paper';
      break
    case 2:
      random = 'scissors'
      break;
  }
  return random;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerWins += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerWins += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerWins += 1;
  } 
}

function game() {
  let rounds = 5;

  for (let i = 1; i <= rounds; i++) {
    let playerSelection = prompt("Player: Choose Rock, Paper or Scissors: ");
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
    alert(`\nRound ${i}: ${playerSelection} vs ${computerSelection}\nCurrent Player Wins: ${playerWins}/${i}`);
  }
}

function showWinner() {
  if (playerWins >= 3) {
    alert("WINNER: PLAYER")
  } else {
    alert("WINNER: COMPUTER")
  }
}

let playerWins = 0;
game()
showWinner()