// Set
// collection of unique values (no duplicates)
// can store any type of values (primitives or objects )
// Iterates in insertion order.
// can iterate through for of , forEach 

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);// duplicate , won't be added
set.add(4);

console.log(set);// Set(4) { 1, 2, 3, 4 }
console.log(set.has(1));
console.log(set.size);

set.delete(2);
console.log(set);// Set(3) { 1, 3, 4 }

//iterating with for of
for (const value of set){
    console.log(value);
}
// iterate with forEach
set.forEach((value)=>{
    console.log(value);
})









// Map
// A collection of key-value pairs.
// Keys can be any type (primitives or objects).
//iterates through for of , foreach 

const map = new Map();

map.set( "name" , "Ijas" );
map.set( 1 , "one" );
map.set( {id:1} , "object key" );

console.log("map :",map); // map : Map(3) { 'name' => 'Ijas', 1 => 'one', { id: 1 } => 'object key' }  
console.log(map.get("name")); // "Ijas"
console.log(map.has(1)); // true
console.log(map.size); // 3

map.delete(1); 
console.log(map); //Map(2) { 'name' => 'Ijas', { id: 1 } => 'object key' } 

//iterate with for of
for(let value of map){
    console.log(value);
}

//iterate with forEach
map.forEach((val,key)=>{
    console.log(key,val);
})