// Домашняя работа №7
// Задание №1
let str = 'js';

str = str.toUpperCase();

console.log(str);

// Задание №2
function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['Java', 'JavaScript', "C++"], 'ja'));

// Задание №3
let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

// Задание №4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание №5
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());

// Задание №6
function getRandomNumber2(num) {
    return Array.from({length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}

console.log(getRandomNumber2(10));

// Задание №7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

// Задание №8
console.log(new Date());

// Задание №9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание №10
function formatDate(date) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} — это ${dayOfWeek}.
    Время: ${hour}:${minute}:${second}`;
}

console.log(formatDate(new Date()));