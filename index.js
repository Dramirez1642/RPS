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


const buttons = document.querySelectorAll(".buttons");
buttons.forEach(function (button) {
    button.addEventListener("click", function() {
        let result;
        let playersChoice = this.dataset.weapon
        let computersChoice = getComputerChoice()
        if (playersChoice == computersChoice) {
            result = "You Tied!"
        } 
        else if (
            (playersChoice == "rock" && computersChoice == "scissors")
            || (playersChoice == "paper" && computersChoice == "rock")
            || (playersChoice == "scissors" && computersChoice == "paper"))
        {
            result = "You Win!"
        }
        else if (
            (playersChoice == "rock" && computersChoice == "paper")
            || (playersChoice == "paper" && computersChoice == "scissors")
            || (playersChoice == "scissors" && computersChoice == "rock"))
        {
            result = "You Lose! Try Again!"
        }
        document.querySelector(".resultNotification").innerText = result
    });
});






console.log(getComputerChoice())