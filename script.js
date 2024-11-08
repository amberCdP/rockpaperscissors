function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    console.log("You will play 5 rounds against the hackers.");
    console.log("Type 'Rock', 'Paper', or 'Scissors' to make your choice.");
    console.log("Type 'exit' anytime to quit the game.");
    
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        
        while (true) {
            playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
            
            if (playerSelection === null || playerSelection.toLowerCase() === "exit") {
                console.log("You've exited the game. I guess you're okay with your computer being hacked!");
                return;
            }
            
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                break;
            } else {
                alert("Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.");
            }
        }

        const computerSelection = computerPlay();
        
        const result = playRound(playerSelection, computerSelection);
        
        console.log(result);
        
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }

        console.log(`Current Score - You: ${playerScore}, Hackers: ${computerScore}`);
    }

        if (playerScore > computerScore) {
            console.log("\nCongratulations! After completely embarassing the hackers,\nthey've left your computer alone");
        } else if (computerScore > playerScore) {
            console.log("\nGame Over! Your computer is lost forever..");
        } else {
            console.log("\nThe game is a tie!");
        }
    }
    
function startGame() {
    alert("Your computer has been hacked, oh no!!\nBut maybe you can chase the hackers away by demolishing them in rock, paper, scissors..\nAre you up for the challenge?\nBefore pressing the OK button open DevTools form settings of your browser!\nThen press OK to start the game.");
    console.log("Game started!");
    setTimeout(game, 0);
}

startGame();