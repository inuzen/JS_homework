console.log("Task 1 - Compare Arrays");

function compareArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {

  }
  let tmp = true;
  arr1.forEach((elem, index) => {
    if (elem !== arr2[index])
      tmp = false;
  });
  if (!tmp)
    console.log('Массивы не равны');
  else
    console.log("Массивы равны");
  return;

}

let a = [1, 2, 3, 4, 5],
  b = [1, 2, 3, 4, 5],
  c = [2, 3, 4, 5, 6];

compareArr(a, b);
compareArr(a, c);

console.log("Task 2 - Range funct");

function range(start, end, step = 1) {
  let arr = [];
  for (let i = start; i <= end; i += step)
    arr.push(i)

  return arr;
}

console.log(range(1, 10, 2));


console.log("Task 3 - Student");

let student = {
  name: "John",
  lastname: "Johnson",
  hobby: ["footbal", "beer", "TV"],
  uni: "Princeton"
};
let student2 = {
  name: "John",
  hobby: ["footbal", "beer", "TV"],
  uni: "Princeton"
};

function print_st({
  name = "",
  lastname = "",
  hobby = "",
  uni = ""
}) {

  console.log(`Student info:
  Name: ${name};
  Lastname: ${lastname};
  Hobbies: ${hobby};
  Education: ${uni}`);
  return;
}

print_st(student);
print_st(student2);


console.log("Task 4 - Random word generator");

// 3 to 5 charachters
// mix vowels and consonants
//random letters

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const vow = "aeiou";
const cons = "bcdfghjklmnpqrstvwxyz";
const randomVowel = () => vow[getRandomInt(0, vow.length)];
const randomConsonant = () => cons[getRandomInt(0, cons.length)];

function create_word() {
  let word = "";
  let word_len = getRandomInt(3, 6);
  console.log("Длина слова: " + word_len);

  let start = Math.round(Math.random());
  const getNextLetter = (char) => (char)? randomConsonant() : randomVowel();

  for(let i = 0; i< word_len;i++){
    word += getNextLetter(start);
    start = !start;
  }
  return word;
}

console.log(create_word());
