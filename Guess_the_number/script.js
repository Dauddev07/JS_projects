let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuesses = [];
let numOfGuesses = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Check if the guess is a number
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuesses.push(guess);
    if (numOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // Check if the guess is correct, too low, or too high
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
function displayGuess(guess) {
  //resets value,updates the list of previous guesses, and displays the number of guesses left
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;
}
function displayMessage(message) {
  // Display the message to the user,tells about the guess and the number of guesses left
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  // Ends the game,disables input and submit button, and displays the start over button
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  // Resets the game, enables input and submit button, and hides the start over button
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
