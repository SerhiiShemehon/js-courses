// Функции

// --- task 1 ---
// Напишите функцию max, которая сравнивает два числа и возвращает большее:
// console.log(max(0, -1)); // 0
// ET = 20m
// AT = 15m

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(0, -1));


// --- task 2 ---
// Напишите функцию - аналог Math.min().Функция принимает любое количество чисел и возвращает меньшее из них: 
// console.log(min(0, -1, 100, 500, 100500)); // -1
// ET = 30m
// AT = 20m

function min(...arrNumber) {
  let minNumber = arrNumber[0];
  for (let i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < minNumber) minNumber = arrNumber[i];
  }
  return minNumber;
}

console.log(min(0, -1, 100, 500, 100500));


// --- task 3 ---
// Изучите перебирающие методы массивов: forEach, filter, map.Создайте массив объектов users(~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями.Используя встроенные функции массивов:
//   a.Отфильтруйте пользователей младше 18 лет
//   b.Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
//   c.Сформируйте новый массив, который содержит только полное имя пользователей
// ET = 1h
// AT = 1h 20m

let users = [
  {
    firstname: 'Nicolas',
    lastname: 'Cage',
    age: 10
  },
  {
    firstname: 'Morgan',
    lastname: 'Freeman',
    age: 43
  },
  {
    firstname: 'Jeff',
    lastname: 'Bridges',
    age: 13
  },
  {
    firstname: 'Samuel',
    lastname: 'Jackson',
    age: 21
  },
  {
    firstname: 'Jack',
    lastname: 'Nicholson',
    age: 24
  },
  {
    firstname: 'Clint',
    lastname: 'Eastwood',
    age: 15
  },
  {
    firstname: 'Kevin',
    lastname: 'Spacey',
    age: 18
  },
  {
    firstname: 'Christoph',
    lastname: 'Waltz',
    age: 43
  },
  {
    firstname: 'Christian',
    lastname: 'Bale',
    age: 78
  },
  {
    firstname: 'Gary',
    lastname: 'Oldman',
    age: 44
  }
];

// a.Отфильтруйте пользователей младше 18 лет
let youngChild = users.filter((item) => item.age < 18); // Записываем в массив всех пользователей младше 18 лет 
let adults = users.filter((item) => item.age >= 18); // Записываем в массив всех пользователей 18 лет и старше 
console.log(youngChild);
console.log(adults);

// b.Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
users.forEach(function (item) {
  item.fullName = `${item.firstname} ${item.lastname}`;
});
console.log(users);

// c.Сформируйте новый массив, который содержит только полное имя пользователей
let newUsers = users.map(item => item.fullName);
console.log(newUsers);


// --- task 4 ---
// Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.
// ET = 1h
// AT = 30m

function myShift(arr) {
  if (Array.isArray(arr)) {
    let arrShift = arr.filter(function (item, index) {
      if (index !== 0) {
        return item;
      }
    })
    return arrShift;
  } else {
    alert('Функция ток для массивов ');
  }
}


// --- task 5 ---
// Напишите функцию аналог метода массива push.Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
// ET = 20m
// AT = 30m

let myPush = (arr, ...arrArg) => {
  if (Array.isArray(arr)) {
    arrArg.forEach((item) => {
      arr[arr.length] = item;
    });
  } else {
    alert('Функция ток для массивов ');
  }
}

let fruits = ["Яблоко", "Апельсин"];
console.log(fruits);
myPush(fruits, 'Груша', 'Дыня');
console.log(fruits);


// --- task 6 ---
// Напишите функцию аналог метода Object.assign().Первый параметр функции - целевой объект, поля которого будут изменены или расширены.Остальные параметры - объекты - источники, полями которых будет расширяться целевой объект.
// ET = 1h
// AT = 35m

let extend = (obj, ...argObj) => {
  if (!Array.isArray(obj) && typeof obj == 'object' && !!obj ) {
    
    argObj.forEach((item) => {
      if (!Array.isArray(item) && typeof item == 'object' && !!item) {
        for (let key in item) {
          obj[key] = item[key];
        }
      } else {
        return alert('Функция ток для обектов');
      }
    } );

    return obj;

  } else {
    return alert('Функция ток для обектов');
  }
}

let source = { firstname: 'Tom', age: 10 };
let s = extend(source, { firstname: 'John' }, { lastname: 'Doe'});
console.log(source);
console.log(s);


// --- task 7 ---
// Напишите функцию setComment с параметрами: date, message, author.Дата и текст сообщения - обязательные параметры, если какой - то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение(alert) о том, что данные переданы некорректно.Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’.Функция распечатывает в консоле текст в формате:

                              // <имя_автора>, <дата>
                              // <текст_сообщения>

// ET = 40m
// AT = 25m

function setComment(date, massage, author = 'Anonymous') {
  if (arguments.length >= 2) {

    if (date === undefined || massage === undefined) {
      return alert('Данные переданы некорректно');
    }
  
    console.log(`---------------------------
|  ${author}, ${date}
|  ${massage}
---------------------------`);

  } else {
    return alert('Данные переданы некорректно');
  }
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');


// Замыкания

// --- task 1 ---
// Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:
// var timer = createTimer();
// alert('!') // код, время выполнения которого нужно измерить
// alert(timer()); // время в мкс от начала выполнения createTimer() до
// момента вызова timer()
// ET = 30m
// AT = 15m

function createTimer() {
  let time1 = performance.now();

  return function() {
    alert('!');
    let time2 = performance.now();
    return `время выполнения ${time2 - time1} миллисекунд`;
  }
}

let timer = createTimer();

alert(timer());




// --- task 2 ---
// // Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй.Функция работает по следующему принципу:
// var hello = createAdder('Hello, ');
// alert(hello('John')); // Hello, John
// alert(hello('Harry')); // Hello, Harry
// var plus = createAdder(5);
// alert(plus(1)); // 6
// alert(plus(5)); // 10

// ET = 30m
// AT = 10m

function createAdder(first) {
  return function (second) {
    return first + second;
  }
}

let hello = createAdder('Hello, ');
alert(hello('John'));
alert(hello('Harry'));

let plus = createAdder(5);
alert(plus(1));
alert(plus(5));