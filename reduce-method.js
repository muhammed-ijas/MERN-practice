const arr = [1,2,3,4,5]

const ans = arr.reduce((acc,cur)=>acc+cur,0)
console.log(ans);

//we can also use reduce for many things 

//flattening a nested arry to single array 
const nested = [[1,2],[3,4],[5,6]];
const single = nested.reduce((acc,cur)=>acc.concat(cur),[]);
console.log(single);
console.log(nested);


//find max or min 

const min=arr.reduce((acc,cur) => acc>cur ? cur : acc ,Infinity);
console.log(min);//1

const max = arr.reduce((acc,cur)=> acc<cur ? cur : acc ,-Infinity);
console.log(max);//5