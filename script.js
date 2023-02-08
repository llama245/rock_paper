
// obtains play from computer from established array of choices 

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
} 