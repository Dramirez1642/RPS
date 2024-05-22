function getComputerChoice() {
    // Generating a random number to later find out what option the computer has
    let randomNumber = Math.floor(Math.random() * 3) + 1;


    // Switch statement to find out which option the computer has
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            alert("JS math screwed up");
            return false;
    }
}


let computerWins = 0
let playerWins = 0 

const buttons = document.querySelectorAll(".buttons");
buttons.forEach(function (button) {
    button.addEventListener("click", function() {
        let result;
        let playersChoice = this.dataset.weapon
        let computersChoice = getComputerChoice()
        // Setting the winner notification to blank in case we play again right after the winner has been decided
        let winnerNotification = document.querySelector("#winnerNotification")
        winnerNotification.innerText = ""

        // Determining the outcome of the current game
        if (playersChoice == computersChoice) {
            result = "You Tied This Round!"
        } 
        else if (
            (playersChoice == "rock" && computersChoice == "scissors")
            || (playersChoice == "paper" && computersChoice == "rock")
            || (playersChoice == "scissors" && computersChoice == "paper"))
        {
            result = "You Win This Round!";
            playerWins++;
        }
        else if (
            (playersChoice == "rock" && computersChoice == "paper")
            || (playersChoice == "paper" && computersChoice == "scissors")
            || (playersChoice == "scissors" && computersChoice == "rock"))
        {
            result = "You Lose This Round! Try Again!"
            computerWins++;
        }

        // Displaying the current games scores
        let playerScore = document.querySelector("#playerScore")
        let computerScore = document.querySelector("#computerScore")

        playerScore.innerText = "Player score:"
        playerScore.append(playerWins.toString())

        computerScore.innerText = "Computer score:"
        computerScore.append(computerWins.toString())

        //Displaying the winner if a player has reached 5 wins
        if (playerWins == 5) {
            winnerNotification.innerText = "YOU'VE WON THE GAME!";
            playerWins = 0
            computerWins = 0
        }
        else if (computerWins == 5) {
            winnerNotification.innerText = "YOU'VE LOST THE GAME!";
            playerWins = 0
            computerWins = 0
        }
        //console.log("player wins" + playerWins)
        //console.log("computer wins" + computerWins)




        document.querySelector("#matchNotification").innerText = result;
    });
});






console.log(getComputerChoice())