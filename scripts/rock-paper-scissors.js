score = JSON.parse(localStorage.getItem('score')) ||{
  wins: 0,
  losses: 0,
  draws: 0
};

showScore();

function RockPaperScissors(value){
  const computerValue = pickComputerMove();
  const userValue = value;
  let result = '';

  if(computerValue === userValue){
    result = 'Draw.';
    score.draws ++;
  }
  else if (
    (computerValue === 'rock' && userValue === "scissors") || 
    (computerValue === 'scissors' && userValue === "paper")||
    (computerValue === 'paper' && userValue === "rock")){
      result = 'You lose.';
      score.losses ++;
  }
  else {
    result = 'You win.';
    score.wins ++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  showResult(result);
  showPicks(userValue,computerValue);
  showScore();
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerValue = '';

  if ( randomNumber >= 0 && randomNumber < 1/3){
    computerValue = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerValue = 'paper';
  }
  else{
    computerValue = 'scissors';
  }
  return computerValue;
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  localStorage.removeItem('score');
  showScore();
}

function showResult(result){
  const resultElem = document.querySelector('.js-result');
  resultElem.innerText = `${result}`;
}
function showPicks(userValue, computerValue){
  const picksElem = document.querySelector('.js-picks');
  picksElem.innerHTML = ` You <img src="style/img/${userValue}-emoji.png"> <img src="style/img/${computerValue}-emoji.png"> Computer.`;
}
function showScore(){
  const scoreElem = document.querySelector('.js-score');
  scoreElem.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draws}`;
}