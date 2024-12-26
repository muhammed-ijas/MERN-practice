
// WeakSet
// similiar to Set , but , 
// only stores objects  (not primitives)
// Objects are held weakly  (garbage-collected when no references exist)

const weakSet = new WeakSet();

let obj1 = {name : "Ijas" }
let obj2 = {age : 21 }
weakSet.add(obj1) 
weakSet.add(obj2) 

console.log(weakSet);

console.log(weakSet.has(obj1)); //true
console.log(weakSet.has(obj2)); //true

obj2 = null ; // obj2 is garbage collected
console.log(weakSet.has(obj2)); //false










// WeakMap
// similiar to Map , but
// only allows objects as keys
// keys are held weakly (garbage - collected when no references exist)

const weakMap = new WeakMap();

let obj3 = {id:1};
weakMap.set(obj3 , "metadata");

console.log(weakMap.get(obj3)); // metadata

obj3 = null; // Object is garbage collected.
console.log(weakMap.has(obj3)); // false







