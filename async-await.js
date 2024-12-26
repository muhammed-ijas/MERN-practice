

// Async/await is a modern way to handle asynchronous operations in JavaScript. The async keyword marks a function as asynchronous, and the await keyword pauses the execution of that function until the Promise is resolved or rejected. This makes asynchronous code easier to write and understand, as it avoids the complexity of callbacks or chained .then() methods. Additionally, async/await provides a natural way to handle errors using try-catch blocks, making it a preferred choice for working with Promises in modern JavaScript.


const promise = new Promise((res,rej)=>{
    let checked = true;
    if(checked){
        res("successfully checked")
    }else{
        rej("error happened while checking data")
    }
})

async function fetchData() {
    try{
        const res = await promise
        console.log(res);
    }catch(err){
        console.error("Error = ",err);
    }
}

fetchData();