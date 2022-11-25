console.log("Hello world");
/**
 * Data Types
 * number
 * string
 * boolean true false
 * null
 * undefined
 * NaN
 * 
 * Array
 * Object
 * Set
 * Map
 * WeakMap
 * WeakSet
 */
avar = 'hello world';
var str = "Hello world";
// str = 20;
let num = 10;
// num = true;
const bool = true;
const arr = [1, 2, 3, 4, 5, {}];
const obj = { name: "John Doe", age_old: 20, "any-num": 10, address: { street: 'MG Road', city: 'Mumbai', pincode: 400078 }, hobbies: ['reading', 'coding'] };
// arr = [2,3,4];
// obj = { name: 'Jane Doe', age: 20 };
arr[0] = 10;
const keyName = 'name';
obj.name = 'Jane'; // dot notation
obj[keyName] = 'Jonas'; // bracket notation
obj["weight"] = 60;
obj.height = 175;
delete obj.age;
console.log(arr);
console.log(obj);
let foo;
let Foo;
let FOO;

// Truty value => true, 'a', [], {}
// Falsy value => false, 0, '', null, undefined, NaN

// if(arr.length) {}
// if() {} else {}
// if() {} else if() {} else if() {}
// if() {} else if() {} else if() {} else {}
// switch(str) {
//   case '':
//     break;
//   default:
//     break;
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
// while (condition) {

// }
// do {

// } while (condition);
// for (const n of arr) {

// }
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }
const x = 10;
const y = 20;
const z = x ?? y;
obj?.name

// rest operator ...
// spread operator ...
const nums = [x, 2, 3, 4, 5, 6];
const copyOfNums = [].concat(nums);
const copyOfNums2 = [...nums, ...nums];
const objCopy = Object.assign({}, obj);
const objCopy1 = { ...obj, hobbies: [...obj.hobbies], address: { ...obj.address } };

// const nums0 = nums[0];
// const nums1 = nums[1];
// const nums2 = nums[2];
// const numsRest = nums.slice(3);
const [nums0, , nums2, , ...numsRest] = nums;
console.log(nums0);
// console.log(nums1);
console.log(nums2);
console.log(numsRest);
const personName = obj.name;
const personAge = obj.age_old;
const personAddress = obj.address;
// const person = { personName, personAge, personAddress };
const { name, age_old, hobbies, ...restPerson } = obj;
console.log(personName, personAge, personAddress);
// console.log(person);
console.log(name, age_old, hobbies, restPerson);
obj.age = obj.age_old;
delete obj.age_old;
console.log(obj)

const multilineString = `
I am multiline string.
I am spanning over multiple lines.
This is awesome.
`

// camelCase
// PascalCase
// snake_case

console.log(multilineString);

function greet(name) {
  name = name && "Jane" && "Jonas" && "Arpit";
  return `Hola! ${name}`;
}
console.log(greet('John'));
console.log(greet());
