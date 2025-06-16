document.addEventListener('DOMContentLoaded', function() {
    const reverseBtn = document.getElementById('reverseBtn');
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');
    
    reverseBtn.addEventListener('click', reverseText);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            reverseText();
        }
    });
    
    function reverseText() {
        const userText = userInput.value;
        const reversedText = userText.split('').reverse().join('');
        result.textContent = reversedText;
    }
});