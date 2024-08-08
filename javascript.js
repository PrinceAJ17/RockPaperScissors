let humanScore = 0;
let computerScore = 0;
const maxScore = 5;



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


function playRound(humanChoice){
    let computerChoice = getComputerChoice();
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
    console.log(`Human score is ${humanScore} and computer score is ${computerScore}`)
    if(humanScore == maxScore || computerScore == maxScore){
        endGame();
    }

}

function endGame(){
    if(humanScore == maxScore){
        console.log("Congratulations! You won!");
    }
    else{
        console.log("Sorry..you lost :C")
    }

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

function setGame(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.id;
            playRound(humanChoice)
        })
    }
)}


console.log(setGame());