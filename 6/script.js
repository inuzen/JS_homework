console.log("Task 1");

let a = {
  name: 'static',
  count: 0
}

function foo(obj, prop, i) {
  let count = 0;
  let res = [];
  while (count <= i) {
    let tmp = {};
    Object.assign(tmp, obj);
    tmp[prop] = count;
    count++;
    res.push(tmp);
  }
  return res;
}

console.log(foo(a, 'count', 10));

console.log("Task 2");

function generateRandomArr() {
  let res = [];

  function getArr() {
    let max_val = 100; //value included
    let new_length = res.length + 1;
    while (res.length < new_length) {
      cur_val = Math.floor(Math.random() * max_val) + 1;
      if (!res.includes(cur_val)) {
        res.push(cur_val);
        break;
      }
    }
    return res;
  }
  return getArr;
}

let getAr = generateRandomArr();

for (var i = 0; i < 99; i++) {
  getAr();
}
console.log(getAr());




console.log("Task 3");

let student = {
  name: "John",
  lastname: "Johnson",
  hobby: ["footbal", "beer", "TV"],
  uni: "Princeton",
  print: function() {
    console.log(`Student info:
    Name: ${this.name};
    Lastname: ${this.lastname};
    Hobbies: ${this.hobby};
    Education: ${this.uni}`);

  }
};

student.print();

console.log("Task 4");


function factorial(n) {
  if (n < 0) return;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
let n = 10;
console.log(`${n}! = ${factorial(n)}`);

console.log("Task 5");
let arr = [{
    'price': 10,
    'count': 2
  }, {
    'price': 5,
    'count': 5
  },

  {
    'price': 8,
    'count': 5
  }, {
    'price': 12,
    'count': 4
  }, {
    'price': 8,
    'count': 4
  },
];

arr.sort(function(a, b) {
  return a.price - b.price;
});
console.log(arr);
