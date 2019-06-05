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
