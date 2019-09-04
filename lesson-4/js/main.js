// --- task 1 ---
// Создайте смешанный массив, например[1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
// ET = 20m
// AT = 17m

let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'],
    sumAll = 0;

for (let key of arr) {
  if ( !isNaN(key) ) {
    sumAll = sumAll + +key;
  }
}

alert( sumAll );


// --- task 2 ---
// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().
// ET = 30m
// AT = 38m

let n = Math.round(Math.random() * 100)
    power = 5;

if( n > 0 ){
  let newArr = new Array(n);

  for(let i = 0; i < n; i++) {
    newArr[i] = (Math.random() * 10).toFixed(2);
    let numberPower = newArr[i];
    for (let j = 0; j < power; j++) {
      numberPower *= newArr[i];
    }

    console.log(numberPower);
  }
}


// --- task 3 ---
// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//   a.Добавьте в начало массива значение‘ Backbone.js’
//   b.Добавьте в конец массива значения‘ ReactJS’ и‘ Vue.js’
//   c.Добавьте в массив значение‘ CommonJS’ вторым элементом
//   d.Найдите и удалите из массива значение‘ jQuery’, выведите его в alert со словами“ Это здесь лишнее”
// ET = 20m
// AT = 30m

let jsArr = ['AngularJS', 'jQuery'];

jsArr.unshift('Backbone.js');
jsArr.push('ReactJS', 'Vue.js');
jsArr.splice(1, 0, 'CommonJS');
let unnecessary = jsArr.splice(jsArr.indexOf('jQuery'), 1);

alert(`${unnecessary} Это здесь лишнее`);


// --- task 4 ---
// Создайте строку с текстом‘ Как однажды Жак звонарь сломал фонарь головой’.Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива(indexOf, splice...).Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
// ET = 30m
// AT = 20m

let str = 'Как однажды Жак звонарь сломал фонарь головой';

let strArr = str.split(' ');
let unnecessaryStr = strArr.pop();
strArr.splice(4, 0, unnecessaryStr);
let correctStr = strArr.join(' ');

alert( correctStr );



// --- task 5 ---
// Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
// ET = 40m
// AT = 1h

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  profession: 'developer'
};
let yourKey = prompt('Ваше свойство?');

if(yourKey in person){
  alert(person[yourKey]);
} else {
  person[yourKey] = prompt('Этого свойства нету! Введите значения для него?');
}


// --- task 6 ---
// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt(например: brand, model, resolution, color...), не используя вспомогательные переменные.Добавьте этот гаджет персоне, созданной ранее.
// ET = 20m
// AT = 15m

let phone = {
  brand: prompt('Brand?'),
  model: prompt('Model?'),
  resolution: prompt('Resolution?'),
  color: prompt('Color?')
}

person.phone = phone;


// --- task 7 ---
// Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней.Из prompt читается дата в формате yyyy - MM - dd.Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
// ET = 30m
// AT = 50m

let dates = {};

dates.firstDate = new Date();
dates.secondDate = new Date(dates.firstDate.getTime() - (24 * 60 * 60 * 1000 * 365));

let yourDate = prompt('Введите дату в формате yyyy-MM-dd', '2019-05-22');

if (Date.parse(yourDate) > dates.secondDate.getTime() && Date.parse(yourDate) < dates.firstDate.getTime()) {
  alert('Введенная дата попадает в диапазон дат объекта dates');
} else {
  alert('Введенная дата НЕ попадает в диапазон дат объекта dates');
}


// --- task 8 ---
// Создайте пустой массив.В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива.После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
// ET = 10m
// AT = 10m

let secondArr = [];
let N = 5;
let allSum = 0;

for(let i = 0; i < N; i++){
  secondArr.push(prompt('Введите любые символы'));
  if (!isNaN(secondArr[i])){
    allSum = allSum + +secondArr[i];
  }
}

alert(allSum);


// --- task 9 ---
// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
// ET = 10m
// AT = 15m

let array = [];

for(let i = 0; i < 9; i++){
  array[i] = [];
  for(let j = 0; j < 10; j++){
    array[i][j] = `${i + 1}x${j + 1}=${(i + 1) * (j + 1)}`;
  }
}

console.log(array);


// --- task 10 ---
// Создайте структуру данных, полностью описывающую html - разметку картинки.
// ET = 15m
// AT = 8m

let dataStructure = {
  "tag": "img",
  "attr": {
    "src": "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    "alt": "",
    "style": "border: 1px solid #ccc",
    "width": "200" // можно без "" 
  }
}
