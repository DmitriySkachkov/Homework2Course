// Домашняя работа №5
// Задание №1
const min = (a , b) => (a < b) ? a:b;

console.log (min(8 , 4));
console.log (min(6 , 6));

// Задание №2
function isOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное'
    } else {
        return 'Число нечетное'
    }
}

console.log (isOdd(1));
console.log (isOdd(2));

// Задание №3
function square(n) {
    console.log (n ** 2);
}

const degree = (n) => n**2;

square(3);
console.log (degree(4));

// Задание №4
function helloUserAge() {
    let age = +prompt('Сколько вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение'); 
    } else if (age >= 0 || age <= 12) {
        alert('Привет, друг'); 
    } else if (age >= 13) {
        alert('Добро пожаловать!'); 
    } else {
        alert('Введите число'); 
    }
}

helloUserAge();

// Задание №5
function calc(a , b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b;
    }
}

console.log(calc(5,6));
console.log(calc(7,'hello'));

// Задание №6
function getNumber() {
    let number = prompt('Введите число');

    if (isNaN(number)) {
        return 'Переданный параметр не является числом'
    } else {
        return `${number} в кубе равняется ${number**3}`
    }
}

console.log(getNumber());

// Задание №7
function getArea() {
    return Math.PI * this.radius ** 2
}

function getPerimetr() {
    return 2 * Math.PI * this.radius
}

const circle1 = {
    radius: 8,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,
} 

const circle2 = {
    radius: 9,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,
}

console.log(circle1.methodGetArea())
console.log(circle2.methodGetArea())
console.log(circle1.methodGetPerimetr())
console.log(circle2.methodGetPerimetr())