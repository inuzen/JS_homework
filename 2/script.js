console.log("Task 1");

let month = parseInt(prompt("Enter the month number"));
// let month = 1;

if (month < 1 || month > 12 || isNaN(month)) {
  console.log("Incorrect value");
} else {
  if (month >= 3 && month <= 5) {
    console.log("Spring");
  } else if (month >= 6 && month <= 8) {
    console.log("Summer");
  } else if (month >= 9 && month <= 11) {
    console.log("Autumn");
  } else {
    console.log("Winter");
  }
}

console.log("Task 2");
let L = 15.5;
let prefix = parseInt(prompt(`Enter prefix for L=${L} \n 1 = dm, 2 = km, 3 = m, 4 = mm, 5 = cm`));
// let prefix = 1;
let res = 0;

if (prefix < 1 || prefix > 5 || isNaN(prefix)) {
  console.log("Incorrect value");
} else {
  switch (prefix) {
    case 1:
      res = L * 0.1;
      break;
    case 2:
      res = L * 1000;
      break;
    case 3:
      res = L;
      break;
    case 4:
      res = L * 0.001;
      break
    case 5:
      res = L * 0.01

  }
  console.log(L + " in meters is " + res);

}


console.log("Task 3");

let num = parseInt(prompt("Enter a number from [-999;999] range"));
// num = 0;
let number_str = "";

if (num < -999 || num > 999 || isNaN(num)) {
  console.log("Out of range");
} else {
  let sign = (num > 0) ? "positive " : "negative ";
  num = Math.abs(num);
  if (num === 0) {
    number_str = "Zero value";
  } else if (num < 10) {
    number_str = sign + "single-digit number"
  } else if (num < 100) {
    number_str = sign + "double-digit number"
  } else if (num < 1000) {
    number_str = sign + "triple-digit number"
  }
  console.log(number_str);
}

console.log("Task 4");

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ThreeFive");
  } else if (i % 3 === 0) {
    console.log("Three");
  } else if (i % 5 === 0) {
    console.log("Five");
  } else {
    console.log(i);
  }
}

console.log("Task 5");

let year = parseInt(prompt("Enter year, AC"));
let vis = "";
if (year < 1 || isNaN(year)) {
  console.log("Wrong year");
} else {
  if (year % 4 !== 0) {
    console.log("%d год не високосный", year);
  } else {
    if (year % 100 === 0 && year % 400 !== 0) {
      console.log("%d год не високосный", year);
    } else {
      console.log("%d год високосный", year);
    }
  }
}

console.log("Task 6");


let dishes = 10,
  soap = 5;

while (dishes > 0 && soap >= 0.5) {
  soap -= 0.5;
  dishes--;
  console.log("Soap left: %f", soap);
}

if (!dishes && !soap) {
  console.log("Run out of both soap and dishes");
} else if (!dishes) {
  console.log("Soap left: %f", soap);
} else {
  console.log("Dishes left: %d", dishes);
}
