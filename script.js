// ДОМАШНЯЯ РАБОТА 4
//1 задание
for (let i=0; i<2; i++) {
   console.log ('Привет');
}
    
//2 задание
for (let i=1; i<=5; i++) {
   console.log (i);
}

//3 задание
for (let i=7; i<=22; i++) {
   console.log (i);
}

//4 задание
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (const key in obj) {
    console.log (`${key} - ${obj[key]} долларов`);
}

//5 задание
let n = 1000;
let num = 0;

while(n >= 50) {
    n /= 2;
    console.log (n);
    num++;
}

console.log (`Количество итераций: ${num}`);

//6 задание
let dayFriday = 5;
let allDay = 31

for (let i=dayFriday; i<=allDay; i+=7) {
    console.log (`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}