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
  function getArr() {
    let max_val = 100; //value included
    let res = [];
    while (res.length < max_val) {
      cur_val = Math.floor(Math.random() * max_val) + 1;
      if (!res.includes(cur_val)) {
        res.push(cur_val);
      }
    }
    return res;
  }
  return getArr;
}

let getAr = generateRandomArr();
console.log(getAr());


console.log("Task 3");

let student = {
  name: "John",
  lastname: "Johnson",
  hobby: ["footbal", "beer", "TV"],
  uni: "Princeton",
  print: function () {
    console.log(`Student info:
    Name: ${this.name};
    Lastname: ${this.lastname};
    Hobbies: ${this.hobby};
    Education: ${this.uni}`);
    return;
  }
};

student.print();

console.log("Task 4");
