let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let ties = document.querySelector('.ties');
let result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

let playerScoreCount = 0;
let computerScoreCount = 0;
let tiesCount = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerSelection, computerSelection) {
    const rules = {
        rock: { win: 'scissors', lose: 'paper' },
        paper: { win: 'rock', lose: 'scissors' },
        scissors: { win: 'paper', lose: 'rock' },
    };
    if (!rules[playerSelection]) return 'invalid';
    return (computerSelection === rules[playerSelection].win) ? 'win' : (computerSelection === rules[playerSelection].lose) ? 'lose' : 'tie';
}

function resetGame() {
  playerScoreCount = 0;
  computerScoreCount = 0;
  tiesCount = 0;
  playerScore.textContent = playerScoreCount;
  computerScore.textContent = computerScoreCount;
  ties.textContent = tiesCount;
  result.textContent = "";
  winner.textContent = "";
}


function game(playerSelection) {

    const computerSelection = computerPlay();
    const gameResult = playRound(playerSelection,computerSelection);

    if(gameResult === 'win'){
        playerScoreCount++;
        result.textContent = 'You win ' + playerSelection + ' beats ' + computerSelection;

    } else if (gameResult === 'lose'){
        computerScoreCount++;
        result.textContent = 'You lose ' + computerSelection + ' beats '+ playerSelection;
    } else if (gameResult === 'tie'){
        tiesCount++;
        result.textContent = 'Tie! Both chose ' + playerSelection;
    }

    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    ties.textContent = tiesCount;

    if (playerScoreCount === 5) {
      winner.textContent = "You are the winner!";
      setTimeout(() => {
        resetGame();
      }, 3000);
    } else if (computerScoreCount === 5) {
      winner.textContent = "Computer is the winner!";
      setTimeout(() => {
        resetGame();
      }, 3000);
    }

    


}

rockBtn.addEventListener('click', (e) => {
  game(e.currentTarget.value)
});

paperBtn.addEventListener('click', (e) => {
  game(e.currentTarget.value)
});

scissorsBtn.addEventListener('click', (e) => {
  game(e.currentTarget.value)
});


  