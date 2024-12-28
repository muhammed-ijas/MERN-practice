//flat : The flat() method in JavaScript is used to flatten nested arrays into a single array. It reduces the nesting level of arrays, and you can specify how many levels deep to flatten.


//flatten one level .
const nested = [1, [2, 3], [4, [5]]];
const result = nested.flat();

console.log(result);
// Output: [1, 2, 3, 4, [5]]



// flatten multiple level
const nested2 = [1, [2, [3, [4]]]];
const result2 = nested2.flat(2);

console.log(result);
// Output: [1, 2, 3, [4]]
