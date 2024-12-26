
// (...)


//can merge
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2]
console.log(arr3);


//can pass to functions 
const num = [1,2,3]
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...num));
