playGame();

function getComputerChoice() {
   let computerChoices = ["rock", "paper", "scissors"];
   return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(computerSelection, playerSelection) {
   if (computerSelection === playerSelection) {
      return "You tied!";
   } else if (
      (computerSelection === "rock" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "rock")
   ) {
      return "You won!!";
   } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
   ) {
      return "You lost :(";
   } else {
      return "Enter a valid choice";
   }
}

function playGame() {
   let rounds = 0;
   (playerWin = 0), (computerWin = 0), (tie = 0);

   while (rounds < 5) {
      let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      let computerSelection = getComputerChoice();

      if (playRound(computerSelection, playerSelection) === "You won!!") {
         playerWin++;
         console.log(playRound(computerSelection, playerSelection));
      } else if (
         playRound(computerSelection, playerSelection) === "You lost :("
      ) {
         computerWin++;
         console.log(playRound(computerSelection, playerSelection));
      } else if (
         playRound(computerSelection, playerSelection) === "You tied!"
      ) {
         tie++;
         console.log(playRound(computerSelection, playerSelection));
      } else if (
         playRound(computerSelection, playerSelection) ===
         "Enter a valid choice"
      ) {
         console.log("Enter a valid choice");
         rounds--;
      }
      rounds++;
   }

   if (rounds === 5) {
      console.log(
         `The final score is :- your wins - ${playerWin}, computer wins - ${computerWin} and ${tie} ties.`
      );
      if (playerWin > computerWin) {
         console.log(`You won!!`);
      } else if (computerWin > playerWin) {
         console.log(`You lost :(`);
      }
   }
}
