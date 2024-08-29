const TOTAL_ROUNDS = 5;
const CHOICES = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function getHumanChoice(){
    let userAnswer = prompt("What is your choice?");

    // normalize format and match choices format
    userAnswer = userAnswer.toLowerCase();

    if (CHOICES.includes(userAnswer)) {
        return userAnswer;
    } else {
        console.log('Your choices are "Rock", "Paper", or "Scissors"')
        return getHumanChoice();
        }
    }

function playRound(humanChoice, computerChoice, score){
    const outcomes = {
        "rockrock": "It's a tie! Both chose rock",
        "rockpaper": "You lose! Paper beats rock",
        "rockscissors": "You win! Rock beats scissors",
        "paperrock": "You win! Paper beats rock",
        "paperpapper": "It's a tie! Both chose paper",
        "paperscissors": "You lose! Scissors beat paper",
        "scissorsrock": "You lose! Rock beats scissors",
        "scissorspaper": "You win! Scissors beats raper",
        "scissorsscissors": "It's a tie! Both chose scissors" 
    };

    const result = outcomes[`${humanChoice}${computerChoice}`];

    if(result){
        console.log(result);

        //update the scoreboard for round
        if (result.includes("win")){
            score.human += 1;
        } else if (result.includes("lose")){
            score.computer += 1;
        }
    } else {
        console.error("Unexpected error: Invalid game state.")
    }
    return score;
}

function playGame(){
    let score = { human: 0, computer: 0};

    for (let i = 1; i <= TOTAL_ROUNDS; i++){
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice();
        score = playRound(humanChoice, computerChoice, score);
    }

    if (score.human > score.computer){
        return console.log("You're the winner!")
    } else if (score.human < score.computer){
        return console.log("Computer is the winner")
    } else {
        return console.log("It's a tie!")
    }
}

playGame();