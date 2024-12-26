//function borrowing

// Function borrowing is when one object uses a method from another object as if it were its own. This is useful when an object doesn’t have a certain method, but you want to reuse the method from another object without copying it.

// You can borrow a function using call, apply, or bind to set the this value for the method.


//example : borrowing a method

const person1 = {
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
};

const person2 = {
    firstName : 'Muhammed',
    lastName: "Ijas"
}

console.log(person1.fullName.call(person2)); //output : Muhammed Ijas





//example for buying an array method to array like object
const arrayLike ={
    0: 'a',
    1: 'b',
    2: 'c',
    length:3,
}

console.log(arrayLike); //{ '0': 'a', '1': 'b', '2': 'c', length: 3 }
Array.prototype.push.call(arrayLike,"d","e","f")
console.log(arrayLike);
// output : {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   '3': 'd',
//   '4': 'e',
//   '5': 'f',
//   length: 6
// }
