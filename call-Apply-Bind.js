// call,apply,bind = this are methods of javascript functions that allow you to explicitly set the value of "this".

//call : invokes a function with a specific 'this' value and arguments passed individually

//example=

function greet(greeting,punctuation){
    console.log(`${greeting} , ${this.name} bro ${punctuation}`);
}

const person = {name: "Alice"};

greet.call(person , "helllo","!") //output = helllo , Alice bro !



//apply : similiar to call ,but argumets are passed as an array.

//example
greet.apply(person,["hi","!"]);
//output = hi , Alice bro !



//bind : returns a new function with 'this' bound to a aspecific value , without immediately invoking it .
const greetAlice = greet.bind(person, "Hey");
greetAlice("?");//output =  Hey , Alice bro ?



//differences
//call() = To invoke a function immediately with arguments passed individually.
//apply() = To invoke a function immediately with arguments passed as an array.
//bind() = 	To create a new function with a bound this for later use.