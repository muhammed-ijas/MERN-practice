

// Primitive data types are immutable, basic types that hold a single value.
// Non-primitive data types are objects or collections of values and are mutable.

// Primitive Data Types**

// 1. String
let name = "Ijas";
console.log(typeof name); // Output: string

// 2. Number
let age = 25;
console.log(typeof age); // Output: number

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // Output: boolean

// 4. Null
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (historical JS quirk)

// 5. Undefined
let notDefined;
console.log(typeof notDefined); // Output: undefined

// 6. Symbol (ES6+)
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol

// 7. BigInt (ES2020+)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint

// ---------------------------------------------
// Non-Primitive Data Types
// ---------------------------------------------

// 1. Object
const person = {
  name: "John",
  age: 30
};
console.log(typeof person); // Output: object

// 2. Array
const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: object

// 3. Function
function greet() {
  return "Hello";
}
console.log(typeof greet); // Output: function

// 4. Date (special object)
const today = new Date();
console.log(typeof today); // Output: object

// ---------------------------------------------
// Key Differences Between Primitive and Non-Primitive Data Types

// Primitive values are immutable.
let x = 10;
let y = x; // Copy value of x to y
x = 20;
console.log(x); // Output: 20
console.log(y); // Output: 10

// Non-primitive values are mutable and assigned by reference.
let obj1 = { name: "Ijas" };
let obj2 = obj1; // Copy reference of obj1 to obj2
obj1.name = "kanaaran";
console.log(obj1.name); // Output: kanaaran
console.log(obj2.name); // Output: kanaaran
obj2.name = "shantha"
console.log(obj1.name); // Output: shantha
console.log(obj2.name); // Output: shantha


// Primitive types: used for simple, standalone values.
// Non-primitive types: used to store collections or complex entities.