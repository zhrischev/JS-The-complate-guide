const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";


const getPlayerChoice = function () {
  const playerChoice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return playerChoice;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  }
  else if (randomValue < 0.67) {
    return PAPER;
  }
  else {
    return SCISSORS;
  }
}

const getWinner = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  }
  else if (
    pChoice === ROCK && cChoice === SCISSORS || 
    pChoice === SCISSORS & cChoice === PAPER || 
    pChoice === PAPER && cChoice == ROCK) {
    return RESULT_PLAYER_WIN;
  }
  else{
    return RESULT_COMPUTER_WIN;
  }
}

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  console.log(winner);
});
