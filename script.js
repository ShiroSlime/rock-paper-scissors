let roundCount = 0,
   ties = 0,
   playerWins = 0,
   computerWins = 0,
   roundResult = "";
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("roundResult");
const score = document.getElementById("score");
const finalResult = document.getElementById("finalResult");

function playRound(playerSelection) {
   let computerSelection = getComputerSelection();
   if (computerSelection === playerSelection) {
      ties++;
      roundResult = "Tied";
   } else if (
      (computerSelection === "Rock" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Rock")
   ) {
      playerWins++;
      roundResult = "Player won";
   } else if (
      (computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Rock" && playerSelection === "Scissors")
   ) {
      computerWins++;
      roundResult = "Computer won";
   }
   roundCount++;
   displayRoundResults(playerSelection, computerSelection);

   if (roundCount === 5) endGame();

   if (roundCount === 6) resetGame();
}

function getComputerSelection() {
   let choices = ["Rock", "Paper", "Scissors"];
   return choices[Math.floor(Math.random() * 3)];
}

function displayRoundResults(playerSelection, computerSelection) {
   player.textContent = `You: ${playerSelection}`;
   computer.textContent = `Computer: ${computerSelection}`;
   result.textContent = `Current Round Result - ${roundResult}`;
   score.textContent = `Current Score - ${playerWins} : ${computerWins}`;
}

function endGame() {
   if (playerWins > computerWins) finalResult.textContent = `YOU WON!!`;
   else if (computerWins > playerWins) finalResult.textContent = `YOU LOST :((`;
   else finalResult.textContent = `IT'S A TIE`;

   score.textContent = `Final Score - ${playerWins} : ${computerWins}`;

   player.textContent = ``;
   computer.textContent = ``;
   result.textContent = ``;
}

function resetGame() {
   roundCount = 0;
   ties = 0;
   playerWins = 0;
   computerWins = 0;
   roundResult = "";
   player.textContent = ``;
   computer.textContent = ``;
   result.textContent = ``;
   score.textContent = ``;
   finalResult.textContent = ``;
}
