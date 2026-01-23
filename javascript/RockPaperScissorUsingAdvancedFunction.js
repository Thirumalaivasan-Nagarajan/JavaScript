
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};
let comMove;
function computerMove() {
  let result;
  const random = Math.random();
  if (random <= 1 / 3) {
    result = 'rock';
  } else if (random <= 2 / 3) {
    result = 'paper';
  } else {
    result = 'scissor';
  }
  return result;
}

function display(comMove, userMove) {
  if (comMove === userMove) {
    score.tie++;
    displayResult(comMove, userMove, "Tie");
  } else if (
    (comMove === "rock" && userMove === "scissor") ||
    (comMove === "paper" && userMove === "rock") ||
    (comMove === "scissor" && userMove === "paper")
  ) {
    score.lose++;
    displayResult(comMove, userMove, "Lose");
  } else {
    score.win++;
    displayResult(comMove, userMove, "Win");
  }
  updateScore();
}
function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(
    ".js-score"
  ).innerText = `Win:${score.win},Losses:${score.lose},Tie:${score.tie}`;
}
function displayResult(comMove, userMove, result) {
  if (result === "Tie") {
    document.querySelector(".js-result").innerText = result;
  } else {
    document.querySelector(".js-result").innerText = `You ${result}`;
  }

  document.querySelector(
    ".js-com-user-move"
  ).innerHTML = `You <img class="image" src="../image/${userMove}-emoji.png" /><img class="image" src="../image/${comMove}-emoji.png" /> computer`;
  
}

let isAutoPlaying=true;
let intervalID;
function autoPlay()
{
  if(isAutoPlaying)
  {
intervalID=setInterval(()=>
{
  const comMove=computerMove();
  const userMove=computerMove();
  display(comMove,userMove);
},1000);
isAutoPlaying=false;
  }
  else
  {
    clearInterval(intervalID);
    isAutoPlaying=true;
  }
  
}

function changeButton()
{
  let content=document.querySelector('.auto-play-button').value ;
  if(content==='Auto Play')
  {
    document.querySelector('.auto-play-button').value='Stop Play';
  }
  else
  {
    document.querySelector('.auto-play-button').value='Auto Play';
  }
}

document.querySelector('.js-scissor-button').addEventListener('click',()=>
{
  comMove=computerMove(); display(comMove,'scissor');
});
document.querySelector('.js-rock-button').addEventListener('click',()=>
{
  comMove=computerMove(); display(comMove,'rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>
{
  comMove=computerMove(); display(comMove,'paper');
});
document.body.addEventListener('keydown',event=>
{

  if(event.key==='r')
  {
    comMove=computerMove(); display(comMove,'rock');
  }
  else if(event.key==='s')
  {
    comMove=computerMove(); display(comMove,'scissor');
  }
  else if(event.key==='p')
  {
    comMove=computerMove(); display(comMove,'paper');
  }
});