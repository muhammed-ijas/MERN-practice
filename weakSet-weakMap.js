
// WeakSet

// similiar to Set , but , 
// only stores objects  (not primitives)
//Duplicate objects are not allowed in a WeakSet. If you try to add the same object multiple times, it will be added only once.
// Objects are held weakly  (garbage-collected when no references exist)
// Objects are removed automatically if no references exist.
// Cannot iterate or check size (WeakSet is not iterable).


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
// stores key-value pairs, where keys must be objects.
// Keys in a WeakMap must be unique. If you try to set the same object as a key multiple times, the latest value will overwrite the previous one.
// keys are held weakly (garbage - collected when no references exist)
// Keys are automatically removed if they have no other references.
//Cannot iterate or check size (WeakMap is not iterable).


const weakMap = new WeakMap();

let obj3 = {id:1};
weakMap.set(obj3 , "metadata");

console.log( weakMap.get(obj3) ); // metadata

obj3 = null; // Object is garbage collected.
console.log( weakMap.has(obj3) ); // false
