let currentExample = null;
let correctAnswers = 0;
let incorrectAnswers = 0;

const operators = [
    { symbol: '+', func: (a, b) => a + b },
    { symbol: '-', func: (a, b) => a - b },
    { symbol: '*', func: (a, b) => a * b },
    { symbol: '/', func: (a, b) => a / b }
];

const exampleElement = document.getElementById('example');
const answerElement = document.getElementById('answer');
const checkBtn = document.getElementById('check-btn');
const newGameBtn = document.getElementById('new-game-btn');
const resultElement = document.getElementById('result');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExample() {
    const operator = operators[getRandomInt(0, operators.length - 1)];
    let a, b;
    
    if (operator.symbol === '/') {
        b = getRandomInt(1, 10); 
        a = b * getRandomInt(1, 10);
    } else {
        a = getRandomInt(1, 20);
        b = getRandomInt(1, 20);
    }
    
    const correctAnswer = operator.func(a, b);
    
    return {
        a,
        b,
        operator: operator.symbol,
        correctAnswer
    };
}

function displayNewExample() {
    currentExample = generateExample();
    exampleElement.textContent = (`${currentExample.a} ${currentExample.operator} ${currentExample.b}`);
    answerElement.value = '';
    answerElement.focus();
    resultElement.textContent = '';
}

function checkAnswer() {
    const userAnswer = parseFloat(answerElement.value);
    
    if (isNaN(userAnswer)) {
        resultElement.textContent = 'Пожалуйста, введите число';
        resultElement.className = 'result incorrect';
        return;
    }
    
    const roundedUserAnswer = Math.round(userAnswer * 100) / 100;
    const roundedCorrectAnswer = Math.round(currentExample.correctAnswer * 100) / 100;
    
    if (roundedUserAnswer === roundedCorrectAnswer) {
        resultElement.textContent = 'Правильно!';
        resultElement.className = 'result correct';
        correctAnswers++;
        correctCountElement.textContent = correctAnswers;
    } else {
        resultElement.textContent = (`Неверно! Правильный ответ: ${currentExample.correctAnswer}`);
        resultElement.className = 'result incorrect';
        incorrectAnswers++;
        incorrectCountElement.textContent = incorrectAnswers;
    }
    
    setTimeout(displayNewExample, 3000);
}

function startNewGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    correctCountElement.textContent = '0';
    incorrectCountElement.textContent = '0';
    displayNewExample();
}

function initGame() {
    startNewGame();
}

document.addEventListener('DOMContentLoaded', initGame);
checkBtn.addEventListener('click', checkAnswer);
newGameBtn.addEventListener('click', startNewGame);

answerElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});