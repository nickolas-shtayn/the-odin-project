function getComputerChoice(){
    // randomly return rock, paper or scissors
    let randomValue = Math.random();
    if (randomValue <= 0.333){
        return "Rock";
    } else if (randomValue <= 0.666){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    // return one of the valid choices depending on the user input
    let answer = prompt("What is your choice?").toLowerCase()
    if (answer === "rock"){
        return "Rock";
    } else if (answer === "paper"){
        return "Paper";
    } else if (answer === "scissors"){
        return "Scissors";
    } else {
        console.log('Your choice must be "Rock", "Paper" or "Scissors"');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    // return a string value representing the round winner
    // incremenet humanScore or computerScore variables based on winner

    if (humanChoice === "Rock" && computerChoice === "Rock"){
        console.log("It's a tie! Both chose Rock");
    } else if (humanChoice === "Rock" && computerChoice === "Paper"){
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore += 1;
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore += 1
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === "Paper" && computerChoice === "Paper"){
        console.log("It's a tie! Both choice Paper");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        computerScore += 1
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore += 1
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors"){
        console.log("It's a tie! Both chose Scissors");
    } else {
        console.log("There was an error, please try again");
    }
}

function playGame(){
    for (let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore){
        return console.log("You're the winner!")
    } else if (humanScore < computerScore){
        return console.log("Computer is the winner")
    } else {
        return console.log("It's a tie!")
    }
}

playGame();