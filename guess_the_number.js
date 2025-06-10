let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const newGameButton = document.getElementById('new-game-button');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');

guessButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', startNewGame);
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const userGuessString = guessInput.value.trim();

    if (userGuessString === '') {
        messageDiv.textContent = 'Пожалуйста, введите число';
        return;
    }

    const userGuess = parseInt(userGuessString);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = 'Пожалуйста, введите число от 1 до 100';
        return;
    }
    
    attempts++;
    attemptsDiv.textContent = (`Попыток: ${attempts}`);
    
    if (userGuess === secretNumber) {
        messageDiv.textContent = (`Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        messageDiv.textContent = 'Загаданное число больше!';
    } else {
        messageDiv.textContent = 'Загаданное число меньше!';
    }

    guessInput.value = '';
    guessInput.focus();

}

function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageDiv.textContent = '';
    attemptsDiv.textContent = 'Попыток: 0';
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = '';
    guessInput.focus();
}