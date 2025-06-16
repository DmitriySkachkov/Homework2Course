document.addEventListener('DOMContentLoaded', function() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const resultDiv = document.getElementById('result');

    function renderQuiz() {
        quizContainer.innerHTML = '';
        
        quiz.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            
            const questionText = document.createElement('h3');
            questionText.textContent = `${index + 1}. ${question.question}`;
            questionDiv.appendChild(questionText);
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            
            question.options.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question${index}`;
                radio.value = option.split('.')[0];
                
                const label = document.createElement('label');
                label.textContent = option;
                
                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);
                optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            quizContainer.appendChild(questionDiv);
        });
    }

    renderQuiz();

    submitBtn.addEventListener('click', function() {
        let score = 0;
        
        quiz.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            
            if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
                score++;
            }
        });
        
        resultDiv.textContent = `Вы ответили правильно на ${score} из ${quiz.length} вопросов!`;
        
        if (score === quiz.length) {
            resultDiv.textContent += " Отличный результат!";
        } else if (score >= quiz.length / 2) {
            resultDiv.textContent += " Неплохо!";
        } else {
            resultDiv.textContent += " Попробуйте еще раз!";
        }
    });

    restartBtn.addEventListener('click', function() {
        renderQuiz();
        resultDiv.textContent = '';
    });
});