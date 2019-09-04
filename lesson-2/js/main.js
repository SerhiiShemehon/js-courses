// --- task one ---

let numberOne = 7;
let numberTwo = numberOne * 3;
let numberThree = numberOne + numberTwo;

alert( `The first number: ${numberOne}; \nThe second number: ${numberTwo}; \nThe third number: ${numberThree};` );


// --- task two ---

let firstName, lastName;

firstName = prompt('First name?', 'John');
lastName = prompt('Last name?', 'Doe');

alert( `What’s up ${firstName} ${lastName}` );


// --- task three ---

let x, y;

x = +prompt('First number');
y = +prompt('Second number');

let multiplicationResult = x * y;
let divisionResult = x / y;
let subtrahendResult = x - y;
let sumResult = x + y;

alert( `Произведение: ${multiplicationResult}` );
alert( `Частное: ${divisionResult}` );
alert( `Разность ${subtrahendResult}` );
alert( `Сумма ${sumResult}` );


// --- task four ---

let allHours, allPrice,
    workingDays = +prompt('Сколько дней в неделю вы работали в июле?'),
    workingHours = +prompt('Сколько часов в день вы работали в июле?'),
    priceHour = +prompt('Какой ваш рейт за час?');

allHours = workingHours * workingDays * 4;
allPrice = priceHour * allHours;

alert( `Уважаемый ${firstName} ${lastName}, с учетом того что в июле было 4 недели, и вы отработали ${allHours} часов, по рейту ${priceHour} за час, вам начисляется ${allPrice} y.e.` );


// --- task five ---

let yourNumber = +prompt('Введите ваше число?');
if (yourNumber%2 === 1) {
  alert( 'Ваше число нечетное' );
} else {
  alert( 'Ваше число четное' );
}


// --- task six ---

let yourStr = prompt('Напиши что-то, и я скажу число это или нет');

if ( !isNaN(yourStr) ) {
  alert( 'Поздравляю, у тебя получилось ввести число :)' );
} else {
  alert( 'Чет стремное ты ввел :(' );
}


// --- task seven ---

let randomNumber = Math.round(Math.random() * 100);
let yourNumberTwo = +prompt('Введите второе число');

if (yourNumberTwo && typeof yourNumberTwo === 'number') {
  if (randomNumber > yourNumberTwo){
    alert( `Ваше число меньше: \n${randomNumber} > ${yourNumberTwo}` );
  } else if (randomNumber < yourNumberTwo) {
    alert( `Ваше число больше: \n${randomNumber} < ${yourNumberTwo}` );
  } else {
    alert( `О боги, как это возможно? Числа одинаковы: \n${randomNumber} = ${yourNumberTwo}` );
  }
} else {
  alert( 'Чет стремное ты ввел :(' );
}


// --- task eight ---

let str = prompt('Введите строку', 'Мне нравится изучать Front-end');
let secondStr = prompt('Что вам нравится изучать');

if (str.includes(secondStr) && secondStr) {
  alert( 'Это есть в исходной строке "str"' );
} else {
  alert( 'Этого нету в исходной строке "str"' );
}

let newStr = str.slice(0, 21);
let result = newStr.concat(`>> ${secondStr}`);

alert(result );