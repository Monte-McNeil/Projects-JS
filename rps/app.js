let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallComp} you win!`;
}

function loss(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} losses ${convertToWord(computerChoice)}${smallComp} you lose!`;
}

function draw(userChoice, ComputerChoice) {
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} ties ${convertToWord(computerChoice)}${smallComp} you tied!`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

game("c");

function main () {

rock_div.addEventListener('click', function() {
    game("r")
})

paper_div.addEventListener('click', function() {
    game("p")

})

scissors_div.addEventListener('click', function() {
    game("s")

})

}
main();