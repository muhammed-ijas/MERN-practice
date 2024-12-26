//destructuring = is a convinient way to extract values from arrays or properties in to distinct variables . it allows you to unpack valuesfrom arrays or properties from objects in to variables in a concise and readable manner .

//arrays
const array = [ 1, 2, 3, 4, 5];
const [ a, b, ...c] = array;
console.log(a);//1
console.log(b);//2
console.log(c);//[ 3, 4, 5]




//objects
const object ={
    name: "ijas" ,
    age: 21 ,
    country: "India"
}

const {name , age , country} = object ;
console.log(name);//ijas
console.log(age);//21
console.log(country);//India
