// Условные и логические операторы


// --- task 1 ---
let x = +prompt( 'Number' );

if(x > 0) {
  alert( `${x} - положительное число`)
} else if (x < 0) {
  alert( `${x} - отрицательное число` )
} else {
  alert( `${x} - ноль` )
}


// --- task 2 ---
let firstNumber = Math.round(Math.random() * 100);
let secondNumber = Math.round(Math.random() * 100);
let thirdNumber = Math.round(Math.random() * 100);

if (firstNumber < secondNumber) {
  if (firstNumber < thirdNumber) {
    alert( `минимальное число First Number -> ${firstNumber}` );
  } else {
    alert( `минимальное число Third Number -> ${thirdNumber}` );
  }
} else {
  if (secondNumber < thirdNumber) {
    alert( `минимальное число Second Number -> ${secondNumber}` );
  } else {
    alert( `минимальное число Third Number -> ${thirdNumber}` );
  }
}


// --- task 3 ---
let yourMoney = +prompt( 'Сколько у тебя денег?' ),
    yourFriendMoney = +prompt( 'Сколько у твоего друга денег?' );

if ( (yourMoney + yourFriendMoney) > 1000 ){
  alert( 'Этого хватит для Майорки' );
} else if ( (yourMoney + yourFriendMoney) < 100 ) {
  alert( 'Идите работать, даже на пиво не хватает' );
} else {
  alert( 'Ну на пиво наскребли' );
}


// --- task 4 ---
let age = Math.floor(15 + Math.random() * (35 + 1 - 15));

if(age >= 20 && age < 27) {
  alert( `Тебе ${age}. Выслать повестку` );
} else {
  alert(`Тебе ${age}. Везунчик` );
}


// --- task 5 ---
let numberBus = prompt('Наконец то ты увидел автобус. Какой его номер?');

switch (numberBus){
  case '7':
    alert( 'Это твой, можешь ехать домой' );
    break;
  case '225':
    alert( 'Это твой, можешь ехать домой' );
    break;
  case '255':
    alert( 'Это твой, можешь ехать домой' );
    break;
  default:
    alert( 'Не повезло, жди дальше' );
}


// --- task 6 ---
let day = new Date().getDay();

if(day !== 0 && day !== 6 ){
  alert( 'Иди на работу' )
}


// --- task 7, task 8 ---
let X = +prompt('Введите число от -20 до 20'),
    Y = +prompt('Введите еще одно число от -20 до 20');

if( X <= 1 && (Y >= 3 || Y < 0) ) {
  alert( X + Y );
} else {
  alert( 'Неверно!' );
}

if( (X > 2 && X < 11) || (Y >= 6 && Y < 14) ){
  X = X * 2;
} else {
  X = X + 5;
}
alert( X );


// --- task 9 ---
function hello() {
  name = prompt('Your name?');
  if (name !== '' && name !== 'null') {
    alert( `Hello ${name}` )
  } else {
    alert(`You didn't enter anything. Come on again.`)
    hello();
  }
}
hello();


// --- task 10 ---
let greeting = '', lang;
lang = prompt('Выберите язык (ru, en, de)', 'de');

if(lang === 'en') {
  greeting = 'Hello Friend';
} else if (lang === 'de') {
  greeting = 'Hello Friend';
} else {
  greeting = 'Привет друг';
}
alert(greeting);

switch (lang){
  case 'en':
    greeting = 'Hello Friend';
    break;
  case 'de':
    greeting = 'Hello Friend';
    break;
  default:
    greeting = 'Привет друг';
}
alert(greeting);


// --- task 11 ---
let currentMonth = new Date().getMonth();

switch (currentMonth) {
  case 11:
  case 0:
  case 1:
    alert('Сейчас зима')
    break;
  case 2:
  case 3:
  case 4:
    alert('Сейчас весна')
    break;
  case 5:
  case 6:
  case 7:
    alert('Сейчас лето')
    break;
  default:
    alert('Сейчас осень')
}


// --- task 12 ---
let lanG = 'en', // 'en', 'ru'
    daY = 6; // 0-6

arrDayRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
arrDayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if(lanG === 'ru'){
  alert(arrDayRu[daY]);
} else {
  alert(arrDayEn[daY]);
}



// Циклы

// --- task 1 ---
let str = '';
for(let i = 0; i < 5; i++){
  str = str + '.#';
}
console.log(str);


// --- task 2 ---
for(let i = 0; i < 20; i++){
  if( i%2 !== 1){
    console.log(i*i);
  }
}


// --- task 3 ---
let username = 'John';

for(let j = 0; j < 4; j++){
  if(j === 2) {
    console.log(`Happy birthday dear ${username}`);
  } else {
    console.log(`Happy birthday to you`);
  }
}


// --- task 4 ---
for(let k = 0; k < 10; k++) {
  let currentConfirm = confirm('Остановить цикл?');
  if (currentConfirm) break;
}


// --- task 5 ---
let newNumber = +prompt('Введите число'),
    additions = 0;

for (let z = 0; z < newNumber; z++) {
  if (z % 2 === 1) {
    additions = additions + z;
  }
}

alert(additions);


// --- task 6 ---
let c = 1;
for(;;){
  let rand = Math.random();

  if (rand > 0.9){
    alert(`
      число, прервавшее цикл -> ${rand}
      количество итераций цикла -> ${c}
    ` );
    break;
  }

  c++;
}


// --- task 7 ---
for(let a = 1; a <= 10; a++){
  for(let b = 1; b <= 10; b++){
    console.log(`${b} * ${a} = ${b * a}`);
  }
  console.log('---------------');
  
}


// --- task 8 ---
let a = 1, b = 1, C = 0;
for (let i = 3; i <= 50; C = a + b, a = b, b = C, i++ ) {}
console.log(b);


// --- task 9 ---
outer:
for (let i = 0, c = 0; ; i++){
  let number = prompt('Введите число или отмените');
  if(number === null){

    console.log(`Вы ввели ${i} чисел 
Общая сумма ${c} 
Среднее арифметическое ${c / i}`);

    break;
  } else if (!+number){
    i--;
    continue outer;
  } else {
    c = c + +number;
  }
}


// --- task 10 ---
let password = 'qwerty';

passwordCheck: for(;;) {
  let yuorPassword = prompt('Введите пароль');
  
  if (yuorPassword !== null){
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== yuorPassword[i]) {
        alert('Пароль неверный!');
        continue passwordCheck;
      }
    }
    alert('Пароль верный!');
    break;
  } else {
    let verification = confirm('Вы уверены, что хотите отменить авторизацию?');
    if (verification) {
      alert('Вы отменили авторизацию');
      break;
    } else {
      continue passwordCheck;
    }
  }
}


// --- task 11 ---
for(let i = 1; i <= 50; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}