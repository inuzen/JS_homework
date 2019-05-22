console.log("Task 1");

let A = [12, 4, 3, 10, 1, 20],
  B = [-3, -7, -100, -33];

let C = B.concat(A);
console.log(C);
//ИЛИ
C = B;
A.forEach(d => C.push(d));
console.log(C);

console.log("Task 2");
// var area = [ null, null, null, null, null, null, null, null, null ]
var area = [1, null, 0, null, 1, null, null, null, null];
html = "<table><tbody>";

for (let i = 0; i < area.length; i += 3) {
  html += "<tr>";
  for (let el = 0; el < 3; el++) {
    html += "<td>";
    switch (area[el + i]) {
      case null:
        html += "";
        break;
      case 0:
        html += "O";
        break;
      case 1:
        html += "X";
        break;
    }
    html += "</td>";
  }
  html += "</tr>";
}
html += "</tbody></table>";
document.body.innerHTML = html;


console.log("Task 3 ");

let arr = [12, 4, 3, 10, 1, 20];
console.log(arr);
let min = Math.min(...arr),
  max = Math.max(...arr);
arr.splice(arr.indexOf(min), 1);
arr.splice(arr.indexOf(max), 1);
console.log(arr);
//ИЛИ
arr.sort(function(a, b) {
  return a - b;
});
arr.shift();
arr.pop();
console.log(arr);



console.log("Task 4");

let count = 0,
  tmp;
let tickets = [];
for (let i = 1; i < 1000000; i++) {
  tmp = i.toString();
  while (tmp.length < 6) {
    tmp = "0" + tmp;
  }
  tickets.push(tmp);
}

tmp = [];
for (let i = 0; i < tickets.length; i++) {
  tmp = tickets[i].split('');
  tmp = tmp.map(num => parseInt(num));
  if (tmp[0] + tmp[1] + tmp[2] === tmp[3] + tmp[4] + tmp[5]) {
    count++;
  }
}
console.log("Всего счастливых билетиков: " + count);
