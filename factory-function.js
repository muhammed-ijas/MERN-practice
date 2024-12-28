
// factory  functions
// A factory function is a regular function that creates and returns an object . It is an easy way to create  multiple objects with similiar properties and methods without using classes or the new keyword.
// It generates a new object every time it is called.
// You can add properties and methods to the returned object.


function createCar (make,model) {
    return {
        make,
        model,
        drive(){
            console.log(`driving a ${make} ${model}!`);
        }
    }
}

//usage
const car1 = createCar ("Toyota" , "Corolla" );
const car2 = createCar ("Honda" , "Civik" );

car1.drive() // driving a Toyota Corolla!
car2.drive() // driving a Honda Civik!