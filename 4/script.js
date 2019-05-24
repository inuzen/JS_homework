console.log("Task 1");
let number = "5556";
let sum =0;
for (let i = 0; i < number.length; i++) {
  sum+=parseInt(number[i]);
}
console.log(sum);

console.log("Task 2");
let str = "@abcd@efghi@jklmn@";
let symbol = "@";

let result = str.split(symbol).join(symbol+symbol);
console.log(`Оригинальная строка: ${str}
Символ: ${symbol}
Результат: ${result}`);

console.log("Task 3");


let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){3,})(?=.*[!@#\$%\^&\*])(?=.{10,})/g

let res = false;

// do {
//   str = prompt(`Введите пароль.
//     Условия:
//     - Больше 9ти символов.
//     - Минимум 1 символ латиницей верхнего и нижнего регистров;
//     - От 2х цифр;
//     - Минимум 1 спец символ (!@#$%^&*)`)
//     res = reg.test(str);
//     console.log(res);
//     if (res) {
//       alert("Welcome!")
//     }
//
// } while (!res);


console.log("Task 4");
//Не представляю как это можно сделать с помощью RegEx, но есть Расстояние Левенштайна
//Описание алгоритма: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance
// сам код взят отсюда: https://coderwall.com/p/uop8jw/fast-and-working-levenshtein-algorithm-in-javascript
let dict = "понедельник вторник среда четверг пятница суббота воскресенье";
dict = dict.split(" ");
console.log(dict);

function levenshtein(a, b) {
  if(a.length === 0) return b.length;
  if(b.length === 0) return a.length;

  let matrix = [];

  // increment along the first column of each row
  let i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  let j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

let day_in = prompt("Введите день недели")
day_in = day_in.toLowerCase();

for (let day of dict){
  let lev = levenshtein(day, day_in);
  if(lev<5){
    alert("Возможно Вы имели в виду " + day + "?");
  }
}
