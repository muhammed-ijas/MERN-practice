// Currying = currying is a technique in js where a function with multiple arguments is transformed into a sequense of functions , each taking a single argument . this makes the function more reusable and composable.



//regular functions
function add(a,b){
    return a+b;
}

console.log(add(10,20))//30


//curried function

function plus (a){
    return function(b){
        return a+b;
    }
}

const first = plus(10);
console.log(first (20));

//real word ecample

function log(level){
    return function(message){
        return `[${level.toUpperCase()} = ${message}]`
    }
}

const log1 = log("info");
const log2 = log("error");

console.log(log1("processed"));//[INFO = it will process]
console.log(log2("caused some issues"));//[ERROR = it will not process]

//advantages
//reusability = simplify creating variations of functions
//clean code = reduces code duplication and improves readability 
//composability = Currying makes it easier to compose functions for pipelines and modular systems. = example for composability
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const compute = (x) => add(5)(multiply(2)(x)); // (x * 2) + 5
console.log(compute(3)); // Output: 11
