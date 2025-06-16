document.addEventListener('DOMContentLoaded', function() {
    const choices = ["Камень", "Ножницы", "Бумага"];
    const startScreen = document.getElementById('startScreen');
    const gameScreen = document.getElementById('gameScreen');
    const startBtn = document.getElementById('startBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const gameResult = document.getElementById('gameResult');
    const choiceBtns = document.querySelectorAll('.rock-paper-scissors__choice-btn');
    
    startBtn.addEventListener('click', function() {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
    });
    
    newGameBtn.addEventListener('click', function() {
        gameResult.innerHTML = 'Сделайте ваш выбор';
    });
    
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const userChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            
            let result;
            
            if (userChoice === computerChoice) {
                result = "Ничья!";
            } else if (
                (userChoice === "Камень" && computerChoice === "Ножницы") ||
                (userChoice === "Ножницы" && computerChoice === "Бумага") ||
                (userChoice === "Бумага" && computerChoice === "Камень")
            ) {
                result = "Вы победили!";
            } else {
                result = "Компьютер победил!";
            }
            
            gameResult.innerHTML = `
                Ваш выбор: <strong>${userChoice}</strong><br>
                Выбор компьютера: <strong>${computerChoice}</strong><br><br>
                <strong>${result}</strong>
            `;
        });
    });
});