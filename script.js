
// obtains play from computer from established array of choices 

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerSelection)
    return computerSelection
}

// obtains play from human

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper or scissors: ")
    let playerSelection = choice.toLowerCase()
    return playerSelection

}

//obtains play from human and declares winner 
function playRound (computerSelection,playerSelection) {
    
    let var1 = playerSelection
    let var2 = computerSelection
    
    

    if (var1 == var2) {
        return "It's a tie!"
    }

    else if (var1 === "scissors" && var2 === "paper") {
        return "You Win! Scissors beats Paper"
        
    } 

    else if (var1 === "scissors" && var2 === "rock") {
        return "You Lose! Rock beats Scissors" 
    } 
    
    else if (var1 === "paper" && var2 === "rock") {
        return "You win! Paper beats Rock"  
    } 
    
    else if (var1 === "paper" && var2 === "scissors") {
        return "You Lose! Scissors beats Paper"
    }

    else if (var1 === "rock" && var2 === "paper") {
        return "You Lose! Paper beats Rock"

    }

    else if (var1 === "rock" && var2 === "scissors") { 
        return "You Win! Rock beats Scissors"
    } 

}

function game() {
    let player_score = 0 
    let computer_score = 0 

    let sub_1 = "Win"
    let sub_2 = "Lose"
    let sub_3 = "tie"
    
    for (let i = 0; i < 5; i++) {

        const result = playRound(getComputerChoice(),getHumanChoice())
        let proof = result 
        
        if (proof.includes(sub_1) == true) {
        player_score += 1
        }
        else if (proof.includes(sub_2) == true) {
        computer_score += 1
        }
        else if (proof.includes(sub_3) == true) {
        player_score += 1
        computer_score += 1
        }
    }
    if (player_score > computer_score) {
        console.log("Player Wins!")
    } 
    else if (computer_score > player_score) {
        console.log("Computer Wins!")
    }
} 


    

game()




