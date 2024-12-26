//'this' keyword refers to the current execution context , its value depends on how and where a function is called.

const obj = {
    name:"ijas",
    greet : function (){
        console.log("hai ",this.name);
        
    }
}

obj.greet()

//global context
// in not strict mode, 'this' refers to the global object ('window' in browsers , 'global' in node js) ,
//in strict mode 'this' is undefined 


//Inside object
//'this' refers to the object that ownsthe method .


//Arrow functions
// Aroow functions do not have their own 'this'.
// They inherit 'this' from the surroundig scope(lexical'this')


// we can explicitly set 'this' 
// use 'call' , 'apply' , 'bind' to maually set 'this'.
//example for call apply bind

const user = {
    name:"ijas"
}

function greet (){
    console.log(this.name);
} 

greet.call(user);
greet.apply(user);
const bindedUser = greet.bind(user)
bindedUser()