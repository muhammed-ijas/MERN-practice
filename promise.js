// An object that manages asynchronous operations , . Allowing you to handle its result asynchronously using methods like ‘.then()’ and ‘.catch()’

const promise = new Promise((resolve,reject)=>{
    let a=10;
    let b=10;
    if(a==b){
        resolve()
    }else{
        reject()
    }
})

promise.then(()=>{
    console.log("they are equal");
}).catch(()=>{
    console.log("they are not equal");
})


//promise.all()
// t takes an array of promises as input and return a single promise. This new promise resolves when all of the input promises have resolved, or failed to resolve when any of the one promise reject.

const promise1 = new Promise((res,rej)=>{
    res(["java","python"])
})
const promise2 = new Promise((res,rej)=>{
    res(["js","react"])
})

const allPromise = Promise.all([promise1,promise2])

allPromise.then(()=>{
    console.log("resolved all");
}).catch(()=>{
    console.log("there is a failure");
})




// Promise.allSettled([]) 
// Takes array of promises and return a single promise. This new promise resolves after all of the input promises have settled. That is either fulfilled or rejected.

//Promise.any([])
//Returns a single promise after success, if everything fails then it shows “All promises were rejected”. That is if any of the one is resolved it will show that and if the first and second promise resolved It will only return the first promise(only return a single promise) 

//Promise.race([])
// Returns a single promise as soon as it fails or successed. That is, it returns the first successed or failed value.
