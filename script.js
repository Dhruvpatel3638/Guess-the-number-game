'use strict';
// random number generator
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// checking guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // NO number or 0
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  // if guess is true
  else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.fontSize = '8rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //if guess is false
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess < randomNumber ? '📉 Too Low!' : '📈 Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// replay the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '6rem';
});
