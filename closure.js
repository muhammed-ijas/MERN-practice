// A function along with its lexical scope is called closure
// A closure is a feature in JavaScript where a function remembers the variables from its outer scope even after that scope has finished executing 
// Even after the outer function has returned, the inner function still retains access to the variables defined in the outer function.

function outerFunction(){
    let x =100
    function innerFunction(){
        console.log("inner :",x);
    }
    return innerFunction;
}

const inner = outerFunction()
inner();

// innerFunction is a closure because it "remembers" the variable outerVariable from its outer scope (outerFunction), even after outerFunction has finished execution.

//example of a counter with closure
function createCounter() {
    let count = 0;
  
    return function () {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3

//   Explanation:
//   createCounter returns a function that increments and remembers the variable 'count'.
//   The variable 'count' persists between function calls because of the closure.  


// Disadvantage
// Closures maintain references to variables in their outer scope even after the outer function has finished executing. This can lead to increased memory usage because these variables are not garbage-collected as long as the closure exists.