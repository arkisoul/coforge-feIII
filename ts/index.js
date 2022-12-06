"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
class Person {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    introduce() {
        return `Hi I am ${this.name}!!!`;
    }
}
class Employee extends Person {
    constructor(name, age, height, weight, dept) {
        super(name, age, height, weight);
        this.dept = dept;
    }
}
const p1 = new Person('John', 22, 172, 57);
const e1 = new Employee('Jane', 22, 172, 57, 'HR');
class Car {
    constructor(wheel, torque, hp) {
        this.wheel = wheel;
        this.torque = torque;
        this.hp = hp;
    }
}
const c1 = new Car(2, 99, 20);
