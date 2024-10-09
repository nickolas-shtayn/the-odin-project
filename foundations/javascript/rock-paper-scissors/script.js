const TOTAL_ROUNDS = 5;
const CHOICES = ["rock", "paper", "scissors"]

// function that gets a random choice for the computer
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

const userChoices = document.querySelector("#choices");

let score = { human: 0, computer: 0};
let scoreDisplay = document.querySelector("#running-score");

userChoices.addEventListener("click", getHumanChoice);

function getHumanChoice(event) {
    let target = event.target;
    let userChoice;

    switch(target.id) {
        case 'rock':
            userChoice = "rock";
            break;
        case 'paper':
            userChoice = "paper";
            break;
        case 'scissors':
            userChoice =  "scissors";
            break;
    }
    playRound(userChoice, getComputerChoice(), score);

    if (score.human == 5) {
        scoreDisplay.innerText = "Human won!"
        score = { human: 0, computer: 0};
    } else if (score.computer == 5) {
        scoreDisplay.innerText = "Computer won!"
        score = { human: 0, computer: 0};
    } else {
        scoreDisplay.innerText = `Human: ${score.human}, Computer ${score.computer}`;
    }
}


function playRound(humanChoice, computerChoice, score){

    const outcomes = {
        "rockrock": "It's a tie! Both chose rock",
        "rockpaper": "You lose! Paper beats rock",
        "rockscissors": "You win! Rock beats scissors",
        "paperrock": "You win! Paper beats rock",
        "paperpaper": "It's a tie! Both chose paper",
        "paperscissors": "You lose! Scissors beat paper",
        "scissorsrock": "You lose! Rock beats scissors",
        "scissorspaper": "You win! Scissors beats paper",
        "scissorsscissors": "It's a tie! Both chose scissors" 
    };

    const result = outcomes[`${humanChoice}${computerChoice}`];

    let resultDisplay = document.querySelector("#result");

    if(result){
        resultDisplay.innerText = result;

        if (result.includes("win")){
            score.human += 1;
        } else if (result.includes("lose")){
            score.computer += 1;
        }
    } else {
        console.error("Unexpected error: Invalid game state.")
    }
}