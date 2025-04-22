'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);
let isGameOver = false;

// Helper Functions
const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const setNumber = number => {
  document.querySelector('.number').textContent = number;
};

const setBackground = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

// Check Button Event
document.querySelector('.check').addEventListener('click', function () {
  if (isGameOver) return;

  const guessInput = document.querySelector('.guess').value;
  const guess = Number(guessInput);

  if (!guessInput) {
    setMessage('⛔ No Number!');
  } else if (guess < 1 || guess > 20) {
    setMessage('🚫 Number must be between 1 and 20!');
  } else if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('#60b347');
    setNumberWidth('30rem');
    isGameOver = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('⚠️ You lost the game!');
      setNumber(secretNumber);
      setNumberWidth('30rem');
      setScore(0);
      setBackground('#FF0000');
      isGameOver = true;
    }
  }
});

// Again Button Event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  isGameOver = false;

  setScore(score);
  setNumber('?');
  setNumberWidth('15rem');
  setMessage('Start guessing...');
  setBackground('#222');
  document.querySelector('.guess').value = '';
});
