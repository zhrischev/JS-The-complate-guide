const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";


const getPlayerChoice =  () => {
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

const getComputerChoice =  () => {
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

const getWinner =  (pChoice, cChoice) => {
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

startGameBtn.addEventListener('click', () => {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice} therefor you `;
  if (winner === RESULT_DRAW){
    message = message + "had a draw."
  }
  else if (winner === RESULT_PLAYER_WIN){
    message = message + "win.";
  }
  else {
    message = message + "lost.";
  }
  alert(message);
});
