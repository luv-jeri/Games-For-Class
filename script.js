let luckyNumber = Math.floor(Math.random() * 20);
console.log(luckyNumber);

const userGuessInput = document.getElementById('guessing');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');
const main = document.getElementById('main');
const scoreCard = document.getElementById('score');
let score = 10;
scoreCard.textContent = score;
const againButton = document.getElementById('again');

function checkNumber() {
  const userGuess = userGuessInput.value;

  if (userGuess < 1 || userGuess > 20) {
    message.textContent = 'Please enter a number between 1 and 20!';
    return;
  }

  if (userGuess == luckyNumber) {
    message.textContent = 'You guessed the lucky number!';
    main.style.backgroundColor = '#60b347';
  } else {
    main.style.backgroundColor = '#DD5353';
    score--;
    scoreCard.textContent = score;
    if (userGuess > luckyNumber) {
      message.textContent = 'Your guess is too high!';
    }
    if (userGuess < luckyNumber) {
      message.textContent = 'Your guess is too low!';
    }
  }

  if (score < 1) {
    message.textContent = 'You lost the game!';
    main.style.backgroundColor = '#DD3333';
    checkButton.style.display = 'none';
  }
}

checkButton.addEventListener('click', checkNumber);

againButton.addEventListener('click', function () {
  score = 10;
  scoreCard.textContent = score;
  message.textContent = 'Start guessing...';
  luckyNumber = Math.floor(Math.random() * 20);
  main.style.backgroundColor = '#222';
  checkButton.style.display = 'block';
});
