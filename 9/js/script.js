console.log("Task 1");
let arr = [1, 2, 3, 4, 5];
console.log(`Initial array: ${arr}
  Min value: ${myModule.getMin(arr)}
  Max value: ${myModule.getMax(arr)}
  Avg value: ${myModule.getAvg(arr)}
  `);
console.log("Array copy:", myModule.getCopy(arr));


console.log("Task 2");
// Построить график функции y = f(x):  y = 5/x, при x>=1;y = x*x – 4*x,
// при x<1.Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.

function getY(x) {
  if (x < 1) {
    return x * x - 4 * x;
  }
  if (x >= 1) {
    return 5 / x;
  }

}

let line = {
  x: [],
  y: [],
  type: 'scatter'
};

for (let i = -4.99; i < 5; i += 0.01) {
  line.x.push(i);
  line.y.push(getY(i));
}

let data = [line];

Plotly.newPlot('plot', data);


console.log("Task 4");
// Написать функцию генерации поля n x n (значение n - аргумент функции), в ячейки рандомно спрятать несколько призов.
// Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет.
// Количество оставшихся попыток выводим рядом с игровым полем.
let prize = {
  book: "Книга",
  car: "Машина!",
  horse: "Конь!",
  empty: "Пусто!",
  empty2: "Пусто!",
  empty3: "Пусто!",
  getPrize: function() {
    let rng = Math.floor(Math.random() * (Object.keys(this).length - 2));
    return this[Object.keys(this)[rng]];
  }
};

let count = 3;

function createBox(container) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = "yellow";
  let counter = document.querySelector(".counter");
  card.onclick = function() {
    if (count > 0) {
      this.textContent = prize.getPrize();
      this.style.backgroundColor = "whitesmoke";
      count--;
      counter.textContent = count;
    }
  }
  container.appendChild(card);
}

function create_field(n) {
  let box = document.querySelector(".field");
  for (let i = 0; i < n; i++) {
    let container = document.createElement("div");
    container.classList.add("flex-container");
    for (let j = 0; j < n; j++) {
      createBox(container);
    }
    box.appendChild(container);
  }
}

create_field(4);
