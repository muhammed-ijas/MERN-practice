//sort method


const arr = [3,5,2,8,1,9,0]


//ascending order 
const ascend = arr.sort((a,b)=>a-b)
console.log(ascend);


//descending order 
const descend = arr.sort((a,b)=>b-a)
console.log(descend);