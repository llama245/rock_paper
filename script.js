
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
        let tie = "It's a tie!"
        return tie 
    }

    else if (var1 === "scissors" && var2 == "paper") {
        let scissors_paper_winner = "You Win! Scissors beats Paper"
        
        return scissors_paper_winner
    } 

    else if (var1 === "scissors" && var2 == "rock") {
        let scissors_rock_winner = "You Lose! Rock beats Scissors"
        
        return scissors_rock_winner
    } 
    
    else if (var1 === "paper" && var2 == "rock") {
        paper_rock_winner = "You win! Paper beats Rock"
       
        return paper_rock_winner
    } 
    
    else if (var1 == "paper" && var2 == "scissors") {
        paper_scissors_loser = "You Lose! Scissors beats Paper"
      
        return paper_scissors_loser
    }

    else if (var1 == "rock" && var2 == "paper") {
        let rock_paper_loser = "You Lose! Paper beats Rock"
        
        return rock_paper_loser
    }

    else if (var1 == "rock" && var2 === "scissors") {
        let rock_scissors_loser = "You Win! Rock beats Scissors"
        
        return rock_scissors_loser
    } 

}

function game() {

    for (let i = 0; i < 5; i++) {

        if (proof_player = true ) {
            player += 1
        }

        else if (proof_computer = true) {
            computer += 1
        }
        
        else if (proof_tie = true) {
            player += 1 
            computer += 1
        }

    }

    if (player > computer) {
        console.log("Player Wins!")
    }

    else if (computer > player) {
        
        console.log("Computer Wins!")
    }
} 


    
const computerSelection = getComputerChoice()
const playerSelection = getHumanChoice()



console.log(result)
game(playRound(computerSelection,playerSelection)) 