// camelCase
// PascalCase
// snake_case

// hoisting
console.log(greet("John"))
const bar = 'bar';
let baz = 'baz';
console.log(bar)
console.log(baz)
// function declaration
function greet(name) {
  name = name || "Guest";
  return `Hola! ${name}`
}
console.log(greet())

// function expression
const foo = function() {
  return 'foo';
}
console.log(foo());

// arrow function || this keyword
const baz0 = (a, b) => {return a + b}
const baz1 = a => {return a}
const baz2 = a => a + 10

// apply, call, bind

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hobbies = ['Reading', 'Writing'];
  console.log('Person', this);
  // this.intro = function() {
  //   console.log(`Hi! this is ${this.name}. I'm ${this.age} years old. I work in ${this.dept} department`)
  // }
  // this.printHobbies = function() {
  //   this.hobbies.forEach((hobby) => {
  //     console.log(`Hi! this is ${this.name}. I like ${hobby}`)
  //   })
  // }
}
const p0 = Person();
console.log(p0);
const p1 = new Person('John', 22);
Person.prototype.intro = function () {
  console.log(`Hi! this is ${this.name}. I'm ${this.age} years old. I work in ${this.dept} department`)
}
Person.prototype.printHobbies = function () {
  this.hobbies.forEach((hobby) => {
    console.log(`Hi! this is ${this.name}. I like ${hobby}`)
  })
}
console.log(p1)
p1.printHobbies();
class Employee extends Person {
  constructor(name, age, dept) {
    super(name, age);
    this.dept = dept;
  }

  intro() {
    console.log(`Hi! this is ${this.name}. I'm ${this.age} years old. I work in ${this.dept} department`);
  }

  printHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(`Hi! this is ${this.name}. I like ${hobby}`)
    })
  }
}
const e1 = new Employee('John', 22, 'HR')
console.log(e1);
function foobarbaz(name = "Greet") {
  return `Hola! ${name}`;
}
