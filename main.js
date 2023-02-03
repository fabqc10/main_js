function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        return 'win';
      } else if (computerSelection === 'paper') {
        return 'lose';
      } else {
        return 'tie';
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        return 'win';
      } else if (computerSelection === 'scissors') {
        return 'lose';
      } else {
        return 'tie';
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        return 'win';
      } else if (computerSelection === 'rock') {
        return 'lose';
      } else {
        return 'tie';
      }
    } else {
      return 'invalid';
    }
  }


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    let numberOfGames = window.prompt('How many rounds do you want to play?');

    for(let i = 0; i < numberOfGames ; i++){
        const playerSelection = window.prompt('rock, paper or scissors?');
        const computerSelection = computerPlay();
        const result = playRound(playerSelection,computerSelection);
        console.log(result);

        if(result === 'win'){
            playerScore++;
            console.log('You win ' + playerSelection + ' beats ' + computerSelection);
    
        } else if (result === 'lose'){
            computerScore++;
            console.log('You lose ' + computerSelection + ' beats '+ playerSelection );
        } else if (result === 'tie'){
            ties++;
            console.log('Tie! Both chose ' + playerSelection);
        }
    }

    console.log('Scores: You ' + playerScore + ' - ' + 'Computer ' + computerScore + ' - Ties ' + ties);
    window.alert('Scores: You ' + playerScore + ' - ' + 'Computer ' + computerScore + ' - Ties ' + ties);

    
    if (playerScore > computerScore) {
        console.log("You win the game!");
        window.alert("You win the game!")
    } else if (playerScore < computerScore) {
        console.log("You lose the game.");
        window.alert("You lose the game!")
    } else {
        console.log("The game is a tie.");
        window.alert("The game is a tie.");
    }

}


  