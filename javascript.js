let humanScore = 0;
let computerScore = 0;
const maxScore = 5;
const div = document.querySelector(".container") 


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
    let message = ""
    switch(true){
        case computerChoice == humanChoice:
            message = "Draw";
            break;
            //
        case computerChoice == "Rock" && humanChoice == "Paper":
            humanScore++;
            message = "You win! Paper beats Rock";
            break;
            //
        case computerChoice == "Paper" && humanChoice == "Rock":
            computerScore++;
            message = "You lose! Paper beats Rock";
            break;
            //
        case computerChoice == "Rock" && humanChoice == "Scissors":
            computerScore++;
            message = "You lose! Rock beats Scissors";
            break;
            //
        case computerChoice == "Scissors" && humanChoice == "Rock":
            humanScore++;
            message = "You win! Rock beats Scissors";
            break;
            //
        case computerChoice == "Paper" && humanChoice == "Scissors":
            humanScore++;
            message = "You win! Paper beats Scissors";
            break;
            //
        case computerChoice == "Scissors" && humanChoice == "Paper":
            computerScore++;
            message = "You lose! Paper beats Scissors";
            break;
    }
    div.innerHTML = `<p> ${message} </p>` 
    div.innerHTML = div.innerHTML + `<p> Human score is ${humanScore} and computer score is ${computerScore} </p>`
    if(humanScore == maxScore || computerScore == maxScore){
        endGame();
    }

}

function endGame(){
    if(humanScore == maxScore){
        div.innerHTML += "<p> Congratulations! You won! </p>"
    }
    else{
        div.innerHTML += "<p> Sorry..you lost :C </p>"
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


