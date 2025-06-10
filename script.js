// Домашняя работа №6
// Задание №1
const  arr = [1, 5, 4, 10, 0, 3];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if (arr[i]===10) {
        break
    }
}

// Задание №2
console.log(arr.indexOf(4));

// Задание №3
const arrey = [1, 3, 5, 10, 20];

console.log(arrey.join(' '));

// Задание №4
const arr1 = [];

for (let i=0; i<3; i++) {
    const arr2 = [];
    for (let i=0; i<3; i++) {
        arr2.push(1);
    }
    arr1.push(arr2);
}

console.log(arr1);

// Задание №5
const newArrey = [1, 1, 1];

newArrey.push(2, 2, 2);

console.log(newArrey);

// Задание №6
const arr3 = [9, 8, 7, 'a', 6, 5];
arr3.sort();
arr3.pop();
console.log(arr3);

// Задание №7
const arr4 = [9, 8, 7, 6, 5];

const userNumber = +prompt('Введите число');

if (arr4.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание №8
let str = 'abcdef';

str = str.split('');

str.reverse();

str = str.join('');

console.log(str);

// Задание №9
const arr5 = [[1, 2, 3],[4, 5, 6]];
const arr6 = [];

for (let i=0; i<arr5.length; i++) {
    arr6.push(...arr5[i]);
}

console.log(arr6);

// Задание №10
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i=0; i<arr7.length; i++) {
    if (arr7[i + 1]) {
        console.log(arr7[i]+arr7[i + 1]);
    }
}

// Задание №11
const arr8 = [1, 2, 3];

function square() {
    return arr8.map(item => item ** 2);
}

console.log(square(arr8));

// Задание №12
const arr9 = ['Привет', 'как', 'дела',];

function getLength() {
    return arr9.map(item => item.length);
}

console.log(getLength(arr9));

// Задание №13
const arr10 = [2, -4, 6, -8];

function negativeNumber() {
    return arr10.filter(item => item < 0);
}

console.log(negativeNumber(arr10));

// Задание №14
const arr11 = [];

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

for (let i=0; i<10; i++) {
    arr11.push(randomNumber());
}

const evenArr = [];

for (let i=0; i<arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        evenArr.push(arr11[i]);
    }
}

console.log(arr11);
console.log(evenArr);

// Задание №15
const arr12 = [];

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

for (let i=0; i<10; i++) {
    arr12.push(randomNumber());
}

console.log(arr12.reduce((a, b) => a + b) / arr12.length);
