
//in js , the concepts of shallow freeze and deep freeze are related to immutability.


// Shallow freeze 
// freezes only the immediate propertiese of an object . if the object has nested objects , those nested objects are still mutable .

//example
const obj = {
    name:"ijas",
    details : {
        age:21,
        place:"calicut"
    }
}

Object.freeze(obj)

obj.name = "minhaj" ;
obj.details.age = 22 ; 

console.log(obj.name);// not allowed , wont change
console.log(obj.details.age);// allowed , as 'details' is not frozen







// Deep freez
//  Freezes the object and recursively freezes all nested objects and properties.
// JavaScript doesn't provide a native Object.deepFreeze() method. we need to implement it manually.

function deepFreeze(obj){
    Object.freeze(obj);

    Object.keys(obj).forEach((key)=>{
        if(typeof obj[key] === 'object' && 
           obj[key] !== null &&
           !Object.isFrozen(obj[key])
         ){
            deepFreeze(obj[key])
         }
    })

    return obj;
}

deepFreeze(obj);

console.log("after deepfreeze");

obj.name = "mimhaj" ;//not allowed
obj.details.age = 21 ; //not allowed

console.log(obj.name); //ijas
console.log(obj.details.age); //22
