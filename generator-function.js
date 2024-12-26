// Generator function
// Special type of function that can pause and resume its execution . 
// It is defined using the function* syntax and uses the "yield" keyword to pause and return values during its execution.
// Resumes execution with the .next() method of the returned iterator.
// The done property of .next() indicates whether the generator has finished execution.


function* generator(){
    yield 1;
    yield 2;
    yield 2;
}

const gen = generator()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


//generate with loop
function* generator2 (){
    let i=0;
    while(true){
        yield i++;
    }
}

const gen2 = generator2();
console.log(gen2.next());
console.log(gen2.next());
//we can call inside a loop like this
for(let j=0 ; j<10 ; j++){
    console.log(gen2.next());
}



// generate even numbers
function* generator3 (){
    let i=0;
    while(true){
        yield i;
        i+=2;
    }
}

const gen3 = generator3();
console.log(gen3.next());
console.log(gen3.next());
//we can call inside a loop like this
for(let j=0 ; j<10 ; j++){
    console.log(gen3.next());
}