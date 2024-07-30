let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const rndInt = Math.floor((Math.random()*3) + 1);
    switch(rndInt){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Error";
    }
}

function getHumanChoice(){
    let choice = prompt();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(humanChoice, computerChoice){

    switch(true){
        case computerChoice == humanChoice:
            console.log("Draw");
            break;
            //
        case computerChoice == "Rock" && humanChoice == "Paper":
            humanScore++;
            console.log("You win! Paper beats Rock");
            break;
            //
        case computerChoice == "Paper" && humanChoice == "Rock":
            computerScore++;
            console.log("You lose! Paper beats Rock");
            break;
            //
        case computerChoice == "Rock" && humanChoice == "Scissors":
            computerScore++;
            console.log("You lose! Rock beats Scissors");
            break;
            //
        case computerChoice == "Scissors" && humanChoice == "Rock":
            humanScore++;
            console.log("You win! Rock beats Scissors");
            break;
            //
        case computerChoice == "Paper" && humanChoice == "Scissors":
            humanScore++;
            console.log("You win! Paper beats Scissors");
            break;
            //
        case computerChoice == "Scissors" && humanChoice == "Paper":
            computerScore++;
            console.log("You lose! Paper beats Scissors");
            break;

    }

}

function playGame(){
    for(let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    return `Computer score is ${computerScore} and your score is ${humanScore}`
}


console.log(playGame());