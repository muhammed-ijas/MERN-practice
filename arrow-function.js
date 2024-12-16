//arrow function = An arrow function is a consice way to write a function expression in javascript, introduce in ES6 . It uses the '=>' (arrow) syntax and does not bind its own 'this' , 'arguments' , 'super' , instead inheriting these from its surrounding lexical scope.

 
//regular functions 
function regular(a,b){
    return a + b ;
}

//arrow function

const arrow = (a,b) => a+b ; 


//example

const greet = (name) => `Hello , ${name}` ;
console.log(greet("Alice"));

//key features
// 1 : shorter syntax = arrow functions have more concise syntax
// 2 : implicit return = if the function body has only a single expression , the result of that expression is returned automatically (no need for 'return' or curly braces '{}')
            const square = (x)=>x*x;
            console.log(square(5))// output = 5 ;

// 3 : No 'this' binding = arrow functions do not have their own 'this'.they inherit 'this' from the enclosing lexical scope. This makes arrow functions especially useful in situations where the value of'this' would normally change (e.g. , in callbacks)
//example of 'this' behaviour
            const obj = {
                name: "Alice",
                regularFunction: function () {
                    console.log(this.name);// 'this' refers to obj   
                },
                arrowFunction: ()=>{
                    console.log(this.name);
                },
            };

            obj.regularFunction();// Alice
            obj.arrowFunction();// undefined


// 4 : arrow functions do not have their own arguments
            const regularFunc = function (){
                console.log(arguments); 
            }
            regularFunc(1 , 2, 3);

            const arrowFunc = (...args)=>{
                console.log(args);
            }
            arrowFunc(1 ,2 , 3)


// 5 : cannot be used as a constructor
            const RegularFunc = function (name) {
                this.name = name;
            };
            const obj1 = new RegularFunc("Alice"); //worksfine
    
            const ArrowFunc = (name)=>{
                this.name = name;
            }
            const obj2 = new ArrowFunc("Bob")// TypeError: ArrowFunc is not a constructor



// 6 : use in callbacks : arrow functions are perfect for callbacks because they preserve the surrounding 'this'.
            function Timer(){
                this.seconds = 0;

                //Regular function changes 'this' context
                setIntervel(function (){
                    console.log(this.seconds++); // NaN or undefined
                }, 1000);


                // Arrow function keeps the context
                setIntervel(()=>{
                    console.log(this.seconds++);//works as expected 
                }, 1000);

            }
            const timer = new Timer();