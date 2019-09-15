// Методы объектов и контекст исполнения функции


// --- task 1 ---
// Создайте объект calculator с методами:
//   a.read() запрашивает prompt для двух значений и сохраняет их как
//   свойства объекта x, y
//   b.sum() возвращает сумму этих двух значений
//   c.multi() возвращает произведение этих двух значений
//   d.diff() возвращает разницу
//   e.div() возвращает частное
//   calculator.read();
//   alert(calculator.sum());
//   alert(calculator.multi());
// ET = 20m
// AT = 15m

let calculator = {
  read() {
    x = +prompt('Введите первое число?');
    y = +prompt('Введите второе число?');
    if ( !isNaN(x) && !isNaN(y) ) {
      this.x = x;
      this.y = y;
    } else {
      alert('Одно из значений не является числом. Давайте попробуем еще раз! ');
      calculator.read();
    }
  },
  sum() {
    return `${this.x} + ${this.y} = ${this.x + this.y}`;
  },
  multi() {
    return `${this.x} * ${this.y} = ${this.x * this.y}`;
  },
  diff() {
    return `${this.x} - ${this.y} = ${this.x - this.y}`;
  },
  div() {
    return `${this.x} / ${this.y} = ${this.x / this.y}`;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());



// --- task 2 ---
// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
// ET = 15m
// AT = 10m

let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function () {
    setTimeout(() => {
      alert(this.message);
    }, 3000);
  }
}

coffeeMachine.start();



// --- task 3 ---
// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.Используйте концепцию chaining для создания цепочки вызовов.
// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1
// ET = 10m
// AT = 10m

let counter = {
  count: 0,
  inc: function () {
    this.count++;
    return this;
  },
  dec: function () {
    this.count--;
    return this;
  },
  getValue: function () {
    return this.count;
  }
}

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);



// --- task 4 ---
// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.Для расчетов все методы используют функционал ранее созданного калькулятора.
// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));
// ET = 30m
// AT = 40m

let me = {
  x: 10,
  y: 0,
  getSum(x, y) {
    this.x = x;
    this.y = y;
    return calculator.sum.call(this);
  },
  getDiff(x, y) {
    this.x = x;
    this.y = y;
    return calculator.diff.call(this);
  },
  getMulti(x, y) {
    this.x = x;
    this.y = y;
    return calculator.multi.call(this);
  },
  getDiv(x, y) {
    this.x = x;
    this.y = y;
    return calculator.div.call(this);
  }
}

alert(me.getSum(1, 1));
alert(me.getDiff(100, 20));
alert(me.getMulti(13, 3));
alert(me.getDiv(1, 0));



// --- task 5 ---
// Есть следующий код:

// var country = {
//   name: 'Ukraine',
//   language: 'ukrainian',
//   capital: {
//     name: 'Kyiv',
//     population: 2907817,
//     area: 847.66
//   }
// };
// function format(start, end) {
//   console.log(start + this.name + end);
// }

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined
// ET = 20m
// AT = 15m

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
    name: 'Kyiv',
    population: 2907817,
    area: 847.66
  }
};
function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(null, ['']); // undefined



// --- task 6 ---
// Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// function format(start, end) {
//   console.log(start + this.name + end);
// }
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// userFormat('<<<', '>>>'); // <<<John>>>
// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().
// ET = 30m
// AT = 1h

// не очень понял что надо сделать

let user = {
  name: 'John'
}
function format(start, end) {
  console.log(start + this.name + end);
}

// // --- task 6.1 ---
(function (start, end) {
  return format.call(user, start, end);
})('<<<', '>>>')

// // --- task 6.2 ---
userFormat = format.bind(user);
userFormat('<<<', '>>>');


// --- task 6 ---
// Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:
// hello('World'); // Hello World
// hello('John'); // Hello John
// ET = 30m
// AT = 30m

// не очень понял что надо сделать в первой часте 
function concat(separator, str1, str2) {
  return `${str1}${separator}${str2}`;
}
let newStr = concat(', ', 'Hello', 'John');
console.log(newStr);


function hello(name) {
  let hello = {
    message: '',
    getHello() {
      this.message = this.message + 'Hello ';
      return this;
    },
    getName() {
      this.message = this.message + name;
      return this;
    }
  }
  hello.getHello().getName();
  return console.log(hello.message);
}

hello('World');
hello('John');



// Рекурсия


// --- task 1 ---
// Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
// console.log(cube(2)); // 8
// ET = 30m
// AT = 1h

// task 1.1 цикл
function cube(number, power) {
  let cubeNumber = number;
  for (let i = 0; i < power - 1; i++) {
    cubeNumber = cubeNumber * number;
  }
  return cubeNumber;
}
console.log(cube(2, 3));

// task 1.2 рекурсия
function cubeR(number, power) {
  if (power !== 1){
    return number * cubeR(number, power - 1)
  }
  return number;
}

console.log(cubeR(2, 3));


// --- task 2 ---
// Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
// console.log(sum(1, 2, 3, 4, 5)); // 15
// ET = 30m
// AT = Infinity (очень долго)

function sum(...numbers) {
  if(numbers.length > 0){
    return +numbers.pop() + +sum.apply(this, numbers);
  } else {
    return numbers;
  }
}

console.log(sum(1, 2, 3, 4, 5));