let randomnum = parseInt(Math.random()*100 + 1);

const userinput = document.querySelector("#guessField");
const button = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');
const lastresult = document.querySelector('.lastResult');
const p = document.createElement('p');

let playgame = true;
let chances=1;
let prevguess = [];

if (playgame){
button.addEventListener('click' , function(e){
  e.preventDefault();
  const guess = parseInt(userinput.value);
  console.log(guess);
  validateguess(guess);
});
}
function validateguess(guess){
  if(isNaN(guess)){
    alert(`enter a valid no.`);
  }
  else if(guess>100){
    alert(`enter a valid number`);
  }
  else if(guess<1){
    alert(`enter a valid number`);
}else{
  if(chances===11){
    displayguess(guess);
    displaymessage(`your game is over ${randomnum} is the number`);
    endgame();
  }
  displayguess(guess);
  checkguess(guess);
}
}
function checkguess(guess){
 if(guess===randomnum){
   displaymessage(`congratulations`);
   endgame();
 }else if(guess>randomnum){
  displaymessage(`guess is too high`);
}else if(guess<randomnum){
  displaymessage(`guess is too low`);
  }
}
function displayguess(guess){
  userinput.value = '';
  guesses.innerHTML += `${guess}, `;
  chances++;
  lastresult.innerHTML = `${11 - chances}`;
}
function displaymessage(message){
 lowOrHi.innerHTML+= `<h3>${message}</h3>`;
}
function endgame(guess){
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultParas.appendChild(p);
  playgame = false;
  startgame();
}
function startgame(guess){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomnum = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    chances = 1;
    guesses.innerHTML = '';
    lastresult.innerHTML = `${11 - chances} `;
    userinput.removeAttribute('disabled');
    resultParas.removeChild(p);
    playgame = true;
  });
}

