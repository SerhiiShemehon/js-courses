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

// //   a.Отфильтруйте пользователей младше 18 лет
let youngChild = users.filter((item) => item.age < 18); // Записываем в массив всех пользователей младше 18 лет 
let adults = users.filter((item) => item.age >= 18); // Записываем в массив всех пользователей 18 лет и старше 
console.log(youngChild);
console.log(adults);

// // b.Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
users.forEach(function (item) {
  item.fullName = `${item.firstname} ${item.lastname}`;
});
console.log(users);

//   c.Сформируйте новый массив, который содержит только полное имя пользователей
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