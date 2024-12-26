
// proxy object 
// A Proxy in JavaScript is an object that wraps around another object and intercepts or customizes the fundamental operations on it, such as reading a property, assigning a value, deleting a property, etc. Think of a Proxy as a "middleman" that can control and modify how interactions with an object happen.



const person = {
    name:"ijas",
    age:21
}

const handler = {
    get(target,prop){
        if(prop in target){
            return `property is here : ${target[prop]}`
        }else{ 
            return `property ${prop} does not exist `
        }
    } ,
    set(target,prop,value){
        if(prop === "age" && value < 0){
            console.log("age cannot be negative");
            return false; //reject the change
        }
        target[prop] = value ;
        return true; //allow the change
    }
}

const proxyPerson = new Proxy(person, handler);


//interacting with the proxy
console.log(proxyPerson.name); //property is here : ijas
console.log(proxyPerson.age); //property is here : 21
console.log(proxyPerson.address); //property address does not exist

proxyPerson.age = -5; //age cannot be negative
proxyPerson.age = 35; // it will change the age to 35

console.log(proxyPerson.age); // property is here : 35




//code explanation

// get trap: When you try to access a property on proxyPerson, the get trap is triggered. It customizes the response by adding a message indicating whether the property exists or not.

// set trap: When you try to modify a property on proxyPerson, the set trap is triggered. If you try to set a negative value for age, the change is rejected, and an error message is logged.
