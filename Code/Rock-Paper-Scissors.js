let score=JSON.parse(localStorage.getItem('score'));

if(score==null){
  score={
    wins:0,
    losses:0,
    Ties: 0
  };
}

updateScore();



function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result=='You win.'){
    score.wins+=1;
  }
  else if(result=='You lose.'){
    score.losses+=1;
  }
  else if(result=='Tie.'){
    score.Ties+=1;
  }

  updateScore();

  updateResult(result);

  updateMoves(playerMove,computerMove);

  localStorage.setItem('score',JSON.stringify(score));


  
}

function updateScore(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.wins} ,Losses:${score.losses} , Ties:${score.Ties}`;
}

function updateResult(result){
  document.querySelector('.js-result').innerHTML=`${result}`;
}

function updateMoves(playerMove,computerMove){
  document.querySelector('.js-moves').innerHTML=`You: <img src="../Images/${playerMove}-emoji.png" class="move-icon">

  Computer: <img src="../Images/${computerMove}-emoji.png" class="move-icon">`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}