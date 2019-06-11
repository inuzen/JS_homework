console.log("Task 2");

function Human (name, age, gender, hobbies){
  this.name = name? name : "Undefined";
  this.age = (Number.isInteger(age)&&age>0)? age : 0;
  this.gender = gender;
  this.hobbies = Array.isArray(hobbies)? hobbies.join(", ") : hobbies;

  this.toString =function () {
    return `Особь человека. Зовут ${this.name}, возраст ${this.age}, пол: ${this.gender}. Интересы: ${this.hobbies} `
  }

}

function Student(name, age, gender, hobbies, uni) {
  Human.call(this,name, age, gender, hobbies);
  this.uni = uni;
  this.toString = function () {
    return `Студент. Зовут ${this.name}, возраст ${this.age}, пол: ${this.gender}. Интересы: ${this.hobbies}. Обучается в ${this.uni} `
  }

}

let john = new Human("john", 12, "male", ["footbal", "cats"]);
console.log(""+john);

let karen= new Student("Karen", 24, "helicopter", ["buzzfeed", "hiking"], "University of Sociology");
console.log(""+karen);
