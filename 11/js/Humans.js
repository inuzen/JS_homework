console.log("Task 2");

function Human (name, age, gender, hobbies){
  this.name = name? name : "Undefined";
  this.age = (!age.isNaN&&age>0)? age : 0;
  this.gender = gender;
  this.hobbies = Array.isArray(hobbies)? hobbies.join(", ") : hobbies;

  }

  Human.prototype.toString =function () {
    return `Особь человека. Зовут ${this.name}, возраст ${this.age}, пол: ${this.gender}. Интересы: ${this.hobbies} `
}
function Student(name, age, gender, hobbies, uni) {
  Human.call(this,name, age, gender, hobbies);
  this.uni = uni;
}

Student.prototype.toString = function () {
  return `Студент. Зовут ${this.name}, возраст ${this.age}, пол: ${this.gender}. Интересы: ${this.hobbies}. Обучается в ${this.uni} `
}


Student.prototype.__proto__ = Human.prototype;//Для чего мы это делаем? Оно и без этой строчки работает

let john = new Human("john", 12, "male", ["footbal", "cats"]);
console.log(""+john);

let karen= new Student("Karen", 24, "helicopter", ["buzzfeed", "hiking"], "University of Sociology");
console.log(""+karen);
