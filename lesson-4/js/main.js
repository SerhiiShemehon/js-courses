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

