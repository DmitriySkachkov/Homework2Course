/* ДОМАШНЯЯ РАБОТА 2
// 1 задание
let a = 10;
alert(a);
a = 20;
alert(a);

// 2 задание
const firstIphoneRealeseYear = 2007;
alert(`Первый iPhone был выпущен в ${firstIphoneRealeseYear} году`);

// 3 задание
const creatorOfJavaScript = "Брендан Эйх";
alert(`Создатель JavaScript ${creatorOfJavaScript}`);

// 4 задание
const x = 10;
const y = 2;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
alert(
    `Сумма: ${x} + ${y} = ${sum}\n` +
    `Разность: ${x} - ${y} = ${difference}\n` +
    `Произведение: ${x} * ${y} = ${product}\n` +
    `Частное: ${x} / ${y} = ${quotient}`
);

// 5 задание
const result = y**5;
alert(`2 в 5-й степени: ${result}`);

// 6 задание
a = 9;
let b = 2;
const reminder = a % b;
alert(`Остаток от деления 9 на 2: ${reminder}`)

// 7 задание
let num = 1;
num += 5;
num -=  3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8 задание
let age = Number(prompt('Сколько Вам лет'));
alert(`${age} - Вам столько лет` )

//9 задание
let user = {
  name: String("Дмитрий"),  
  age: Number(28),          
  isAdmin: Boolean(true)     
};

//10 задание
let name = String(prompt('Какое у Вас имя?'));
alert(`Привет, ${name}`);
*/

// ДОМАШНЯЯ РАБОТА 3
//1 задание
let password = 'пароль';
let userPassword = prompt ('Введите пароль');
if (userPassword===password) {
  alert ('Пароль введен верно');
} else {
  alert ('Пароль введен неправильно');
}

//2 задание
function checkNumber(c) {
    if (c > 0 && c < 10) {
        console.log(`При c = ${c} - Верно`);
    } else {
        console.log(`При c = ${c} - Неверно`);
    }
}
checkNumber(0);    
checkNumber(10);   
checkNumber(-3);   
checkNumber(2);  

//3 задание
let d = 120;  
let e = 50;   

if (d > 100 || e > 100) {
    console.log("Верно");  
} else {
    console.log("Неверно"); 
}

//4 задание
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//5 задание
let monthNumber = Number(prompt('Введите номер месяца')); 

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Некорректный номер месяца. Введите число от 1 до 12.");
} else {
    let season;
    
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
    }
    
    console.log(`Месяц с номером ${monthNumber} относится к сезону «${season}»`);
}