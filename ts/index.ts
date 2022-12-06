function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

class Person {
  name: string;
  private age: number;
  height: number;
  protected weight: number;

  constructor(name: string, age: number, height: number, weight: number) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  introduce() {
    return `Hi I am ${this.name}!!!`
  }
}

class Employee extends Person {
  dept: string;

  constructor(name: string, age: number, height: number, weight: number, dept: string) {
    super(name, age, height, weight);
    this.dept = dept;
  }
}

const p1 = new Person('John', 22, 172, 57);
const e1 = new Employee('Jane', 22, 172, 57, 'HR');

class Car {
  constructor(protected wheel: number, public torque: number, public hp: number) {
  }
}

const c1 = new Car(2, 99, 20);

// data types
const str: string = 'hello world';
const num: number = 0;
const bool: boolean = true;
const none: null = null;
const und: undefined = undefined;

const arr: Array<number> = [1, 2, 3, 4];
const arr1: number[] = [1, 2, 3, 4];

type TCar = {
  brand: string;
  name: string;
  category: string;
  topSpeed: number;
}
interface ICar {
  brand: string;
  name: string;
  category: string;
  topSpeed: number;
  drive: (a: number) => number;
}
class CCar implements ICar {
  brand: string;
  name: string;
  category: string;
  topSpeed: number;
}

const c2: TCar = {
  brand: 'Tata',
  name: 'Nano',
  category: 'Hatchback',
  topSpeed: 120,
}
const c3: CCar = {};

function decorate(target: any) {

}

@decorate
class Decorated {

}

function anotherdecorator(params: any) {
  return function decoratorFunction(target: any) {

  }
}

@anotherdecorator({})
class DecoratedClass {

}

interface APIResponse<A, B> {
  success: boolean;
  message: string;
  code: number;
  error: Error | B;
  data: null | A;
}

const apiResponse1: APIResponse<string, null> = {
  success: true,
  message: 'Success',
  code: 200,
  error: null,
  data: 'Hello world',
}
const apiResponse2: APIResponse<number> = {
  success: true,
  message: 'Success',
  code: 200,
  error: null,
  data: 100,
}
const apiResponse3: APIResponse<number[]> = {
  success: true,
  message: 'Success',
  code: 200,
  error: null,
  data: [1,2,3,4,5],
}
