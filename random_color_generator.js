const changeBtn = document.getElementById('changeBtn');
const colorCode = document.getElementById('colorCode'); 
let lastColor = 'rgb(225, 255, 143)';
        
function getRandomColor() {
    const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
        
function changeBackground() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = `Текущий цвет: ${newColor}`;
    lastColor = newColor;
}            
                   
changeBtn.addEventListener('click', changeBackground);
        
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        changeBackground();
    }
});