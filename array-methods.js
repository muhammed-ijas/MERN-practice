
// 1. forEach: Executes a provided function once for each array element.
const arr1 = [1, 2, 3, 4];
arr1.forEach(num => console.log(num)); // Output: 1 2 3 4

// 2. map: Creates a new array populated with the results of calling a function on every element.
const squares = arr1.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

// 3. filter: Creates a new array with all elements that pass the test implemented by the provided function.
const even = arr1.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]

// 4. reduce: Executes a reducer function on each element and returns a single output value.
const sum = arr1.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

// 5. find: Returns the first element that satisfies the provided testing function.
const firstEven = arr1.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2

// 6. findIndex: Returns the index of the first element that satisfies the testing function.
const firstEvenIndex = arr1.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// 7. includes: Determines whether an array includes a certain value.
console.log(arr1.includes(3)); // Output: true

// 8. some: Tests whether at least one element passes the provided function.
console.log(arr1.some(num => num > 3)); // Output: true

// 9. every: Tests whether all elements pass the provided function.
console.log(arr1.every(num => num > 0)); // Output: true

// 10. sort: Sorts the elements of an array in place.
const names = ['John', 'Alice', 'Bob'];
names.sort();
console.log(names); // Output: ['Alice', 'Bob', 'John']

// 11. reverse: Reverses the array in place.
arr1.reverse();
console.log(arr1); // Output: [4, 3, 2, 1]

// 12. concat: Merges two or more arrays.
const arr2 = [5, 6, 7];
const merged = arr1.concat(arr2);
console.log(merged); // Output: [4, 3, 2, 1, 5, 6, 7]

// 13. slice: Returns a shallow copy of a portion of an array into a new array.
const sliced = merged.slice(2, 5);
console.log(sliced); // Output: [2, 1, 5]

// 14. splice: Changes the contents of an array by removing or replacing elements.
merged.splice(2, 2, 8, 9);
console.log(merged); // Output: [4, 3, 8, 9, 5, 6, 7]

// 15. join: Joins all elements into a string.
const joined = arr1.join('-');
console.log(joined); // Output: "4-3-2-1"

// 16. push: Adds one or more elements to the end of the array.
arr1.push(5);
console.log(arr1); // Output: [4, 3, 2, 1, 5]

// 17. pop: Removes the last element from an array.
arr1.pop();
console.log(arr1); // Output: [4, 3, 2, 1]

// 18. unshift: Adds elements to the beginning of the array.
arr1.unshift(0);
console.log(arr1); // Output: [0, 4, 3, 2, 1]

// 19. shift: Removes the first element of the array.
arr1.shift();
console.log(arr1); // Output: [4, 3, 2, 1]

// 20. flat: Flattens nested arrays into a single-level array.
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // Output: [1, 2, 3, 4]

// 21. flatMap: Maps each element and flattens the result into a new array.
const flatMapped = arr1.flatMap(num => [num, num * 2]);
console.log(flatMapped); // Output: [4, 8, 3, 6, 2, 4, 1, 2]

// 22. from: Creates a new array from an array-like object.
const str = 'hello';
const chars = Array.from(str);
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// 23. isArray: Checks if the value is an array.
console.log(Array.isArray(arr1)); // Output: true

// 24. fill: Fills all elements in an array with a static value.
const filled = new Array(5).fill(0);
console.log(filled); // Output: [0, 0, 0, 0, 0]

// 25. keys: Returns an iterator for the array's keys.
const keys = arr1.keys();
for (let key of keys) {
  console.log(key); // Output: 0 1 2 3
}

// 26. values: Returns an iterator for the array's values.
const values = arr1.values();
for (let value of values) {
  console.log(value); // Output: 4 3 2 1
}

// 27. entries: Returns an iterator for the array's key-value pairs.
const entries = arr1.entries();
for (let [key, value] of entries) {
  console.log(key, value); // Output: 0 4, 1 3, 2 2, 3 1
}

// 28. toString: Converts an array to a string.
console.log(arr1.toString()); // Output: "4,3,2,1"