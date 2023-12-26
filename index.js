let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let result = document.querySelector("#result");

let choiceBtn = document.querySelectorAll('.choiceBtn');
let playerTurn;
let computerTurn;

for (let i = 0; i < choiceBtn.length; i++) {
    choiceBtn[i].addEventListener('click', () => {
        playerTurn = choiceBtn[i].textContent;
        computerTurn = keepFunction();
        player.textContent = `Player: ${playerTurn}`;
        computer.textContent = `Computer: ${computerTurn}`;
        result.textContent = newCheck(playerTurn, computerTurn);
    });
}

function keepFunction() {
    let choices = ['rock', 'scissor', 'paper'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function newCheck(playerTurn, computerTurn) {
    if (playerTurn === computerTurn) {
        return 'Draw';
    } else if (
        (playerTurn === 'rock' && computerTurn === 'scissor') ||
        (playerTurn === 'paper' && computerTurn === 'rock') ||
        (playerTurn === 'scissor' && computerTurn === 'paper')
    ) {
        return 'Player won';
    } else {
        return 'Computer won';
    }
}
