function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
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
    console.log("You will play 5 rounds against the computer.");
    console.log("Type 'Rock', 'Paper', or 'Scissors' to make your choice.");
    console.log("Type 'exit' anytime to quit the game.");
    
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        
        while (true) {
            playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
            
            if (playerSelection === null || playerSelection.toLowerCase() === "exit") {
                console.log("You've exited the game. Thanks for playing!");
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
        
        // Play one round and get the result
        const result = playRound(playerSelection, computerSelection);
        
        // Display the result and update scores
        console.log(result);
        
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }

        console.log(`Current Score - You: ${playerScore}, Computer: ${computerScore}`);
    }